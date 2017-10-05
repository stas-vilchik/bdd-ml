{
  var renderer = rendererForHostTable.get(host);

  if (!renderer) {
    renderer = new ShadowRenderer(host);
    rendererForHostTable.set(host, renderer);
  }

  return renderer;
}
