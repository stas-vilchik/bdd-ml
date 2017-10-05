{
  ("use strict");

  var GetElementsByInterface = scope.GetElementsByInterface;
  var Node = scope.wrappers.Node;
  var ParentNodeInterface = scope.ParentNodeInterface;
  var Selection = scope.wrappers.Selection;
  var SelectorsInterface = scope.SelectorsInterface;
  var ShadowRoot = scope.wrappers.ShadowRoot;
  var TreeScope = scope.TreeScope;
  var cloneNode = scope.cloneNode;
  var defineWrapGetter = scope.defineWrapGetter;
  var elementFromPoint = scope.elementFromPoint;
  var forwardMethodsToWrapper = scope.forwardMethodsToWrapper;
  var matchesNames = scope.matchesNames;
  var mixin = scope.mixin;
  var registerWrapper = scope.registerWrapper;
  var renderAllPending = scope.renderAllPending;
  var rewrap = scope.rewrap;
  var setWrapper = scope.setWrapper;
  var unsafeUnwrap = scope.unsafeUnwrap;
  var unwrap = scope.unwrap;
  var wrap = scope.wrap;
  var wrapEventTargetMethods = scope.wrapEventTargetMethods;
  var wrapNodeList = scope.wrapNodeList;
  var implementationTable = new WeakMap();

  function Document(node) {
    Node.call(this, node);
    this.treeScope_ = new TreeScope(this, null);
  }

  Document.prototype = Object.create(Node.prototype);
  defineWrapGetter(Document, "documentElement");
  defineWrapGetter(Document, "body");
  defineWrapGetter(Document, "head");

  function wrapMethod(name) {
    var original = document[name];

    Document.prototype[name] = function() {
      return wrap(original.apply(unsafeUnwrap(this), arguments));
    };
  }

  [
    "createComment",
    "createDocumentFragment",
    "createElement",
    "createElementNS",
    "createEvent",
    "createEventNS",
    "createRange",
    "createTextNode",
    "getElementById"
  ].forEach(wrapMethod);
  var originalAdoptNode = document.adoptNode;

  function adoptNodeNoRemove(node, doc) {
    originalAdoptNode.call(unsafeUnwrap(doc), unwrap(node));
    adoptSubtree(node, doc);
  }

  function adoptSubtree(node, doc) {
    if (node.shadowRoot) doc.adoptNode(node.shadowRoot);
    if (node instanceof ShadowRoot) adoptOlderShadowRoots(node, doc);

    for (var child = node.firstChild; child; child = child.nextSibling) {
      adoptSubtree(child, doc);
    }
  }

  function adoptOlderShadowRoots(shadowRoot, doc) {
    var oldShadowRoot = shadowRoot.olderShadowRoot;
    if (oldShadowRoot) doc.adoptNode(oldShadowRoot);
  }

  var originalGetSelection = document.getSelection;
  mixin(Document.prototype, {
    adoptNode: function(node) {
      if (node.parentNode) node.parentNode.removeChild(node);
      adoptNodeNoRemove(node, this);
      return node;
    },
    elementFromPoint: function(x, y) {
      return elementFromPoint(this, this, x, y);
    },
    importNode: function(node, deep) {
      return cloneNode(node, deep, unsafeUnwrap(this));
    },
    getSelection: function() {
      renderAllPending();
      return new Selection(originalGetSelection.call(unwrap(this)));
    },
    getElementsByName: function(name) {
      return SelectorsInterface.querySelectorAll.call(
        this,
        "[name=" + JSON.stringify(String(name)) + "]"
      );
    }
  });

  if (document.registerElement) {
    var originalRegisterElement = document.registerElement;

    Document.prototype.registerElement = function(tagName, object) {
      var prototype, extendsOption;

      if (object !== undefined) {
        prototype = object.prototype;
        extendsOption = object.extends;
      }

      if (!prototype) prototype = Object.create(HTMLElement.prototype);

      if (scope.nativePrototypeTable.get(prototype)) {
        throw new Error("NotSupportedError");
      }

      var proto = Object.getPrototypeOf(prototype);
      var nativePrototype;
      var prototypes = [];

      while (proto) {
        nativePrototype = scope.nativePrototypeTable.get(proto);
        if (nativePrototype) break;
        prototypes.push(proto);
        proto = Object.getPrototypeOf(proto);
      }

      if (!nativePrototype) {
        throw new Error("NotSupportedError");
      }

      var newPrototype = Object.create(nativePrototype);

      for (var i = prototypes.length - 1; i >= 0; i--) {
        newPrototype = Object.create(newPrototype);
      }

      [
        "createdCallback",
        "attachedCallback",
        "detachedCallback",
        "attributeChangedCallback"
      ].forEach(function(name) {
        var f = prototype[name];
        if (!f) return;

        newPrototype[name] = function() {
          if (!(wrap(this) instanceof CustomElementConstructor)) {
            rewrap(this);
          }

          f.apply(wrap(this), arguments);
        };
      });
      var p = {
        prototype: newPrototype
      };
      if (extendsOption) p.extends = extendsOption;

      function CustomElementConstructor(node) {
        if (!node) {
          if (extendsOption) {
            return document.createElement(extendsOption, tagName);
          } else {
            return document.createElement(tagName);
          }
        }

        setWrapper(node, this);
      }

      CustomElementConstructor.prototype = prototype;
      CustomElementConstructor.prototype.constructor = CustomElementConstructor;
      scope.constructorTable.set(newPrototype, CustomElementConstructor);
      scope.nativePrototypeTable.set(prototype, newPrototype);
      var nativeConstructor = originalRegisterElement.call(
        unwrap(this),
        tagName,
        p
      );
      return CustomElementConstructor;
    };

    forwardMethodsToWrapper(
      [window.HTMLDocument || window.Document],
      ["registerElement"]
    );
  }

  forwardMethodsToWrapper(
    [
      window.HTMLBodyElement,
      window.HTMLDocument || window.Document,
      window.HTMLHeadElement,
      window.HTMLHtmlElement
    ],
    [
      "appendChild",
      "compareDocumentPosition",
      "contains",
      "getElementsByClassName",
      "getElementsByTagName",
      "getElementsByTagNameNS",
      "insertBefore",
      "querySelector",
      "querySelectorAll",
      "removeChild",
      "replaceChild"
    ].concat(matchesNames)
  );
  forwardMethodsToWrapper(
    [window.HTMLDocument || window.Document],
    [
      "adoptNode",
      "importNode",
      "contains",
      "createComment",
      "createDocumentFragment",
      "createElement",
      "createElementNS",
      "createEvent",
      "createEventNS",
      "createRange",
      "createTextNode",
      "elementFromPoint",
      "getElementById",
      "getElementsByName",
      "getSelection"
    ]
  );
  mixin(Document.prototype, GetElementsByInterface);
  mixin(Document.prototype, ParentNodeInterface);
  mixin(Document.prototype, SelectorsInterface);
  mixin(Document.prototype, {
    get implementation() {
      var implementation = implementationTable.get(this);
      if (implementation) return implementation;
      implementation = new DOMImplementation(unwrap(this).implementation);
      implementationTable.set(this, implementation);
      return implementation;
    },

    get defaultView() {
      return wrap(unwrap(this).defaultView);
    }
  });
  registerWrapper(
    window.Document,
    Document,
    document.implementation.createHTMLDocument("")
  );
  if (window.HTMLDocument) registerWrapper(window.HTMLDocument, Document);
  wrapEventTargetMethods([
    window.HTMLBodyElement,
    window.HTMLDocument || window.Document,
    window.HTMLHeadElement
  ]);

  function DOMImplementation(impl) {
    setWrapper(impl, this);
  }

  function wrapImplMethod(constructor, name) {
    var original = document.implementation[name];

    constructor.prototype[name] = function() {
      return wrap(original.apply(unsafeUnwrap(this), arguments));
    };
  }

  function forwardImplMethod(constructor, name) {
    var original = document.implementation[name];

    constructor.prototype[name] = function() {
      return original.apply(unsafeUnwrap(this), arguments);
    };
  }

  wrapImplMethod(DOMImplementation, "createDocumentType");
  wrapImplMethod(DOMImplementation, "createDocument");
  wrapImplMethod(DOMImplementation, "createHTMLDocument");
  forwardImplMethod(DOMImplementation, "hasFeature");
  registerWrapper(window.DOMImplementation, DOMImplementation);
  forwardMethodsToWrapper(
    [window.DOMImplementation],
    ["createDocumentType", "createDocument", "createHTMLDocument", "hasFeature"]
  );
  scope.adoptNodeNoRemove = adoptNodeNoRemove;
  scope.wrappers.DOMImplementation = DOMImplementation;
  scope.wrappers.Document = Document;
}
