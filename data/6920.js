{
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
}
