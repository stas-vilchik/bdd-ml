{
  var flags = scope.flags;
  var forSubtree = scope.forSubtree;
  var forDocumentTree = scope.forDocumentTree;

  function addedNode(node) {
    return added(node) || addedSubtree(node);
  }

  function added(node) {
    if (scope.upgrade(node)) {
      return true;
    }

    attached(node);
  }

  function addedSubtree(node) {
    forSubtree(node, function(e) {
      if (added(e)) {
        return true;
      }
    });
  }

  function attachedNode(node) {
    attached(node);

    if (inDocument(node)) {
      forSubtree(node, function(e) {
        attached(e);
      });
    }
  }

  var hasPolyfillMutations =
    !window.MutationObserver ||
    window.MutationObserver === window.JsMutationObserver;
  scope.hasPolyfillMutations = hasPolyfillMutations;
  var isPendingMutations = false;
  var pendingMutations = [];

  function deferMutation(fn) {
    pendingMutations.push(fn);

    if (!isPendingMutations) {
      isPendingMutations = true;
      setTimeout(takeMutations);
    }
  }

  function takeMutations() {
    isPendingMutations = false;
    var $p = pendingMutations;

    for (var i = 0, l = $p.length, p; i < l && (p = $p[i]); i++) {
      p();
    }

    pendingMutations = [];
  }

  function attached(element) {
    if (hasPolyfillMutations) {
      deferMutation(function() {
        _attached(element);
      });
    } else {
      _attached(element);
    }
  }

  function _attached(element) {
    if (
      element.__upgraded__ &&
      (element.attachedCallback || element.detachedCallback)
    ) {
      if (!element.__attached && inDocument(element)) {
        element.__attached = true;

        if (element.attachedCallback) {
          element.attachedCallback();
        }
      }
    }
  }

  function detachedNode(node) {
    detached(node);
    forSubtree(node, function(e) {
      detached(e);
    });
  }

  function detached(element) {
    if (hasPolyfillMutations) {
      deferMutation(function() {
        _detached(element);
      });
    } else {
      _detached(element);
    }
  }

  function _detached(element) {
    if (
      element.__upgraded__ &&
      (element.attachedCallback || element.detachedCallback)
    ) {
      if (element.__attached && !inDocument(element)) {
        element.__attached = false;

        if (element.detachedCallback) {
          element.detachedCallback();
        }
      }
    }
  }

  function inDocument(element) {
    var p = element;
    var doc = wrap(document);

    while (p) {
      if (p == doc) {
        return true;
      }

      p = p.parentNode || p.host;
    }
  }

  function watchShadow(node) {
    if (node.shadowRoot && !node.shadowRoot.__watched) {
      flags.dom && console.log("watching shadow-root for: ", node.localName);
      var root = node.shadowRoot;

      while (root) {
        observe(root);
        root = root.olderShadowRoot;
      }
    }
  }

  function handler(mutations) {
    if (flags.dom) {
      var mx = mutations[0];

      if (mx && mx.type === "childList" && mx.addedNodes) {
        if (mx.addedNodes) {
          var d = mx.addedNodes[0];

          while (d && d !== document && !d.host) {
            d = d.parentNode;
          }

          var u =
            (d && (d.URL || d._URL || (d.host && d.host.localName))) || "";
          u = u
            .split("/?")
            .shift()
            .split("/")
            .pop();
        }
      }

      console.group("mutations (%d) [%s]", mutations.length, u || "");
    }

    mutations.forEach(function(mx) {
      if (mx.type === "childList") {
        forEach(mx.addedNodes, function(n) {
          if (!n.localName) {
            return;
          }

          addedNode(n);
        });
        forEach(mx.removedNodes, function(n) {
          if (!n.localName) {
            return;
          }

          detachedNode(n);
        });
      }
    });
    flags.dom && console.groupEnd();
  }

  function takeRecords(node) {
    node = wrap(node);

    if (!node) {
      node = wrap(document);
    }

    while (node.parentNode) {
      node = node.parentNode;
    }

    var observer = node.__observer;

    if (observer) {
      handler(observer.takeRecords());
      takeMutations();
    }
  }

  var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);

  function observe(inRoot) {
    if (inRoot.__observer) {
      return;
    }

    var observer = new MutationObserver(handler);
    observer.observe(inRoot, {
      childList: true,
      subtree: true
    });
    inRoot.__observer = observer;
  }

  function upgradeDocument(doc) {
    doc = wrap(doc);
    flags.dom &&
      console.group("upgradeDocument: ", doc.baseURI.split("/").pop());
    addedNode(doc);
    observe(doc);
    flags.dom && console.groupEnd();
  }

  function upgradeDocumentTree(doc) {
    forDocumentTree(doc, upgradeDocument);
  }

  var originalCreateShadowRoot = Element.prototype.createShadowRoot;

  Element.prototype.createShadowRoot = function() {
    var root = originalCreateShadowRoot.call(this);
    CustomElements.watchShadow(this);
    return root;
  };

  scope.watchShadow = watchShadow;
  scope.upgradeDocumentTree = upgradeDocumentTree;
  scope.upgradeSubtree = addedSubtree;
  scope.upgradeAll = addedNode;
  scope.attachedNode = attachedNode;
  scope.takeRecords = takeRecords;
}
