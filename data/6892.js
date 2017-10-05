{
  this.invalidateShadowRenderer();
  var shadowRoot = getShadowRootAncestor(this);
  var renderer;
  if (shadowRoot) renderer = getRendererForShadowRoot(shadowRoot);
  unsafeUnwrap(this).polymerShadowRenderer_ = renderer;
  if (renderer) renderer.invalidate();
}
