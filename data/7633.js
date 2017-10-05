{
  var tag = inst.stateNode._nativeTag;
  invariant(tag, "All native instances should have a tag.");
  return tag;
}
