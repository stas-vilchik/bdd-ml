{
  var nativePrototype = nativeConstructor.prototype;
  registerInternal(nativePrototype, wrapperConstructor, opt_instance);
  mixinStatics(wrapperConstructor, nativeConstructor);
}
