{
  var newShadowRoot = new wrappers.ShadowRoot(this);
  unsafeUnwrap(this).polymerShadowRoot_ = newShadowRoot;
  var renderer = scope.getRendererForHost(this);
  renderer.invalidate();
  return newShadowRoot;
}
