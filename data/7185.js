{
  var upgradeDocumentTree = scope.upgradeDocumentTree;
  var upgrade = scope.upgrade;
  var upgradeWithDefinition = scope.upgradeWithDefinition;
  var implementPrototype = scope.implementPrototype;
  var useNative = scope.useNative;

  function register(name, options) {
    var definition = options || {};

    if (!name) {
      throw new Error(
        "document.registerElement: first argument `name` must not be empty"
      );
    }

    if (name.indexOf("-") < 0) {
      throw new Error(
        "document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" +
          String(name) +
          "'."
      );
    }

    if (isReservedTag(name)) {
      throw new Error(
        "Failed to execute 'registerElement' on 'Document': Registration failed for type '" +
          String(name) +
          "'. The type name is invalid."
      );
    }

    if (getRegisteredDefinition(name)) {
      throw new Error(
        "DuplicateDefinitionError: a type with name '" +
          String(name) +
          "' is already registered"
      );
    }

    if (!definition.prototype) {
      definition.prototype = Object.create(HTMLElement.prototype);
    }

    definition.__name = name.toLowerCase();
    definition.lifecycle = definition.lifecycle || {};
    definition.ancestry = ancestry(definition.extends);
    resolveTagName(definition);
    resolvePrototypeChain(definition);
    overrideAttributeApi(definition.prototype);
    registerDefinition(definition.__name, definition);
    definition.ctor = generateConstructor(definition);
    definition.ctor.prototype = definition.prototype;
    definition.prototype.constructor = definition.ctor;

    if (scope.ready) {
      upgradeDocumentTree(document);
    }

    return definition.ctor;
  }

  function overrideAttributeApi(prototype) {
    if (prototype.setAttribute._polyfilled) {
      return;
    }

    var setAttribute = prototype.setAttribute;

    prototype.setAttribute = function(name, value) {
      changeAttribute.call(this, name, value, setAttribute);
    };

    var removeAttribute = prototype.removeAttribute;

    prototype.removeAttribute = function(name) {
      changeAttribute.call(this, name, null, removeAttribute);
    };

    prototype.setAttribute._polyfilled = true;
  }

  function changeAttribute(name, value, operation) {
    name = name.toLowerCase();
    var oldValue = this.getAttribute(name);
    operation.apply(this, arguments);
    var newValue = this.getAttribute(name);

    if (this.attributeChangedCallback && newValue !== oldValue) {
      this.attributeChangedCallback(name, oldValue, newValue);
    }
  }

  function isReservedTag(name) {
    for (var i = 0; i < reservedTagList.length; i++) {
      if (name === reservedTagList[i]) {
        return true;
      }
    }
  }

  var reservedTagList = [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-src",
    "font-face-uri",
    "font-face-format",
    "font-face-name",
    "missing-glyph"
  ];

  function ancestry(extnds) {
    var extendee = getRegisteredDefinition(extnds);

    if (extendee) {
      return ancestry(extendee.extends).concat([extendee]);
    }

    return [];
  }

  function resolveTagName(definition) {
    var baseTag = definition.extends;

    for (var i = 0, a; (a = definition.ancestry[i]); i++) {
      baseTag = a.is && a.tag;
    }

    definition.tag = baseTag || definition.__name;

    if (baseTag) {
      definition.is = definition.__name;
    }
  }

  function resolvePrototypeChain(definition) {
    if (!Object.__proto__) {
      var nativePrototype = HTMLElement.prototype;

      if (definition.is) {
        var inst = document.createElement(definition.tag);
        var expectedPrototype = Object.getPrototypeOf(inst);

        if (expectedPrototype === definition.prototype) {
          nativePrototype = expectedPrototype;
        }
      }

      var proto = definition.prototype,
        ancestor;

      while (proto && proto !== nativePrototype) {
        ancestor = Object.getPrototypeOf(proto);
        proto.__proto__ = ancestor;
        proto = ancestor;
      }

      definition.native = nativePrototype;
    }
  }

  function instantiate(definition) {
    return upgradeWithDefinition(domCreateElement(definition.tag), definition);
  }

  var registry = {};

  function getRegisteredDefinition(name) {
    if (name) {
      return registry[name.toLowerCase()];
    }
  }

  function registerDefinition(name, definition) {
    registry[name] = definition;
  }

  function generateConstructor(definition) {
    return function() {
      return instantiate(definition);
    };
  }

  var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";

  function createElementNS(namespace, tag, typeExtension) {
    if (namespace === HTML_NAMESPACE) {
      return createElement(tag, typeExtension);
    } else {
      return domCreateElementNS(namespace, tag);
    }
  }

  function createElement(tag, typeExtension) {
    var definition = getRegisteredDefinition(typeExtension || tag);

    if (definition) {
      if (tag == definition.tag && typeExtension == definition.is) {
        return new definition.ctor();
      }

      if (!typeExtension && !definition.is) {
        return new definition.ctor();
      }
    }

    var element;

    if (typeExtension) {
      element = createElement(tag);
      element.setAttribute("is", typeExtension);
      return element;
    }

    element = domCreateElement(tag);

    if (tag.indexOf("-") >= 0) {
      implementPrototype(element, HTMLElement);
    }

    return element;
  }

  function cloneNode(deep) {
    var n = domCloneNode.call(this, deep);
    upgrade(n);
    return n;
  }

  var domCreateElement = document.createElement.bind(document);
  var domCreateElementNS = document.createElementNS.bind(document);
  var domCloneNode = Node.prototype.cloneNode;
  var isInstance;

  if (!Object.__proto__ && !useNative) {
    isInstance = function(obj, ctor) {
      var p = obj;

      while (p) {
        if (p === ctor.prototype) {
          return true;
        }

        p = p.__proto__;
      }

      return false;
    };
  } else {
    isInstance = function(obj, base) {
      return obj instanceof base;
    };
  }

  document.registerElement = register;
  document.createElement = createElement;
  document.createElementNS = createElementNS;
  Node.prototype.cloneNode = cloneNode;
  scope.registry = registry;
  scope.instanceof = isInstance;
  scope.reservedTagList = reservedTagList;
  scope.getRegisteredDefinition = getRegisteredDefinition;
  document.register = document.registerElement;
}
