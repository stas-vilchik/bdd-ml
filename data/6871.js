{
  var children = this.compose(node);

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    var childRenderNode = renderNode.append(child);
    this.buildRenderTree(childRenderNode, child);
  }

  if (isShadowHost(node)) {
    var renderer = getRendererForHost(node);
    renderer.dirty = false;
  }
}
