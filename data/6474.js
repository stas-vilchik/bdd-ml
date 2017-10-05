{
  if (impl === null) return null;
  assert(isNative(impl));
  return (
    impl.__wrapper8e3dd93a60__ ||
    (impl.__wrapper8e3dd93a60__ = new (getWrapperConstructor(impl))(impl))
  );
}
