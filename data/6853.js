{
  for (var i = 0; i < pendingDirtyRenderers.length; i++) {
    var renderer = pendingDirtyRenderers[i];
    var parentRenderer = renderer.parentRenderer;
    if (parentRenderer && parentRenderer.dirty) continue;
    renderer.render();
  }

  pendingDirtyRenderers = [];
}
