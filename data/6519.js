{
  if (this.root instanceof scope.wrappers.ShadowRoot) {
    return scope.getRendererForHost(this.root.host);
  }

  return null;
}
