{
  var wrapperPrototype = wrapperConstructor.prototype;
  assert(constructorTable.get(nativePrototype) === undefined);
  constructorTable.set(nativePrototype, wrapperConstructor);
  nativePrototypeTable.set(wrapperPrototype, nativePrototype);
  addForwardingProperties(nativePrototype, wrapperPrototype);
  if (opt_instance) registerInstanceProperties(wrapperPrototype, opt_instance);
  defineNonEnumerableDataProperty(
    wrapperPrototype,
    "constructor",
    wrapperConstructor
  );
  wrapperConstructor.prototype = wrapperPrototype;
}
