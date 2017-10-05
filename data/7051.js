{
  var IMPORT_LINK_TYPE = "import";
  var useNative = Boolean(IMPORT_LINK_TYPE in document.createElement("link"));
  var hasShadowDOMPolyfill = Boolean(window.ShadowDOMPolyfill);

  var wrap = function(node) {
    return hasShadowDOMPolyfill ? ShadowDOMPolyfill.wrapIfNeeded(node) : node;
  };

  var rootDocument = wrap(document);
  var currentScriptDescriptor = {
    get: function() {
      var script =
        HTMLImports.currentScript ||
        document.currentScript ||
        (document.readyState !== "complete"
          ? document.scripts[document.scripts.length - 1]
          : null);
      return wrap(script);
    },
    configurable: true
  };
  Object.defineProperty(document, "_currentScript", currentScriptDescriptor);
  Object.defineProperty(
    rootDocument,
    "_currentScript",
    currentScriptDescriptor
  );
  var isIE = /Trident/.test(navigator.userAgent);

  function whenReady(callback, doc) {
    doc = doc || rootDocument;
    whenDocumentReady(function() {
      watchImportsLoad(callback, doc);
    }, doc);
  }

  var requiredReadyState = isIE ? "complete" : "interactive";
  var READY_EVENT = "readystatechange";

  function isDocumentReady(doc) {
    return (
      doc.readyState === "complete" || doc.readyState === requiredReadyState
    );
  }

  function whenDocumentReady(callback, doc) {
    if (!isDocumentReady(doc)) {
      var checkReady = function() {
        if (
          doc.readyState === "complete" ||
          doc.readyState === requiredReadyState
        ) {
          doc.removeEventListener(READY_EVENT, checkReady);
          whenDocumentReady(callback, doc);
        }
      };

      doc.addEventListener(READY_EVENT, checkReady);
    } else if (callback) {
      callback();
    }
  }

  function markTargetLoaded(event) {
    event.target.__loaded = true;
  }

  function watchImportsLoad(callback, doc) {
    var imports = doc.querySelectorAll("link[rel=import]");
    var loaded = 0,
      l = imports.length;

    function checkDone(d) {
      if (loaded == l && callback) {
        callback();
      }
    }

    function loadedImport(e) {
      markTargetLoaded(e);
      loaded++;
      checkDone();
    }

    if (l) {
      for (var i = 0, imp; i < l && (imp = imports[i]); i++) {
        if (isImportLoaded(imp)) {
          loadedImport.call(imp, {
            target: imp
          });
        } else {
          imp.addEventListener("load", loadedImport);
          imp.addEventListener("error", loadedImport);
        }
      }
    } else {
      checkDone();
    }
  }

  function isImportLoaded(link) {
    return useNative
      ? link.__loaded || (link.import && link.import.readyState !== "loading")
      : link.__importParsed;
  }

  if (useNative) {
    new MutationObserver(function(mxns) {
      for (var i = 0, l = mxns.length, m; i < l && (m = mxns[i]); i++) {
        if (m.addedNodes) {
          handleImports(m.addedNodes);
        }
      }
    }).observe(document.head, {
      childList: true
    });

    function handleImports(nodes) {
      for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
        if (isImport(n)) {
          handleImport(n);
        }
      }
    }

    function isImport(element) {
      return element.localName === "link" && element.rel === "import";
    }

    function handleImport(element) {
      var loaded = element.import;

      if (loaded) {
        markTargetLoaded({
          target: element
        });
      } else {
        element.addEventListener("load", markTargetLoaded);
        element.addEventListener("error", markTargetLoaded);
      }
    }

    (function() {
      if (document.readyState === "loading") {
        var imports = document.querySelectorAll("link[rel=import]");

        for (
          var i = 0, l = imports.length, imp;
          i < l && (imp = imports[i]);
          i++
        ) {
          handleImport(imp);
        }
      }
    })();
  }

  whenReady(function() {
    HTMLImports.ready = true;
    HTMLImports.readyTime = new Date().getTime();
    rootDocument.dispatchEvent(
      new CustomEvent("HTMLImportsLoaded", {
        bubbles: true
      })
    );
  });
  scope.IMPORT_LINK_TYPE = IMPORT_LINK_TYPE;
  scope.useNative = useNative;
  scope.rootDocument = rootDocument;
  scope.whenReady = whenReady;
  scope.isIE = isIE;
}
