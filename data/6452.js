{
  var nativePrototype = node.__proto__ || Object.getPrototypeOf(node);
  var wrapperConstructor = constructorTable.get(nativePrototype);
  if (wrapperConstructor) return wrapperConstructor;
  var parentWrapperConstructor = getWrapperConstructor(nativePrototype);
  var GeneratedWrapper = createWrapperConstructor(parentWrapperConstructor);
  registerInternal(nativePrototype, GeneratedWrapper, node);
  return GeneratedWrapper;
}
