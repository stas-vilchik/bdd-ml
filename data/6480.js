{
  if (wrapper === null) return;
  assert(isNative(node));
  assert(wrapper === undefined || isWrapper(wrapper));
  node.__wrapper8e3dd93a60__ = wrapper;
}
