{
  var flags = scope.flags;

  function upgrade(node) {
    if (!node.__upgraded__ && node.nodeType === Node.ELEMENT_NODE) {
      var is = node.getAttribute("is");
      var definition = scope.getRegisteredDefinition(is || node.localName);

      if (definition) {
        if (is && definition.tag == node.localName) {
          return upgradeWithDefinition(node, definition);
        } else if (!is && !definition.extends) {
          return upgradeWithDefinition(node, definition);
        }
      }
    }
  }

  function upgradeWithDefinition(element, definition) {
    flags.upgrade && console.group("upgrade:", element.localName);

    if (definition.is) {
      element.setAttribute("is", definition.is);
    }

    implementPrototype(element, definition);
    element.__upgraded__ = true;
    created(element);
    scope.attachedNode(element);
    scope.upgradeSubtree(element);
    flags.upgrade && console.groupEnd();
    return element;
  }

  function implementPrototype(element, definition) {
    if (Object.__proto__) {
      element.__proto__ = definition.prototype;
    } else {
      customMixin(element, definition.prototype, definition.native);
      element.__proto__ = definition.prototype;
    }
  }

  function customMixin(inTarget, inSrc, inNative) {
    var used = {};
    var p = inSrc;

    while (p !== inNative && p !== HTMLElement.prototype) {
      var keys = Object.getOwnPropertyNames(p);

      for (var i = 0, k; (k = keys[i]); i++) {
        if (!used[k]) {
          Object.defineProperty(
            inTarget,
            k,
            Object.getOwnPropertyDescriptor(p, k)
          );
          used[k] = 1;
        }
      }

      p = Object.getPrototypeOf(p);
    }
  }

  function created(element) {
    if (element.createdCallback) {
      element.createdCallback();
    }
  }

  scope.upgrade = upgrade;
  scope.upgradeWithDefinition = upgradeWithDefinition;
  scope.implementPrototype = implementPrototype;
}
