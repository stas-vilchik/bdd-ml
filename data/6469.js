{
  var nativePrototype = Object.getPrototypeOf(object);
  var superWrapperConstructor = getWrapperConstructor(nativePrototype);
  var GeneratedWrapper = createWrapperConstructor(superWrapperConstructor);
  registerInternal(nativePrototype, GeneratedWrapper, object);
  return GeneratedWrapper;
}
