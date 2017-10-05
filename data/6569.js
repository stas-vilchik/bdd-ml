{
  if (wrapper instanceof wrappers.ShadowRoot) wrapper = wrapper.host;
  return unwrap(wrapper);
}
