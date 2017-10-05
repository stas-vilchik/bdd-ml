{
  var renderer = unsafeUnwrap(this).polymerShadowRenderer_;

  if (renderer) {
    renderer.invalidate();
    return true;
  }

  return false;
}
