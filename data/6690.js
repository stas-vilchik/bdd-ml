{
  var p = element.parentNode;
  if (!p || !p.shadowRoot) return;
  var renderer = scope.getRendererForHost(p);
  if (renderer.dependsOnAttribute(name)) renderer.invalidate();
}
