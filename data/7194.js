{
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
