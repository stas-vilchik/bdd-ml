{
  if (!this.dirty) return;
  this.invalidateAttributes();
  var host = this.host;
  this.distribution(host);
  var renderNode = opt_renderNode || new RenderNode(host);
  this.buildRenderTree(renderNode, host);
  var topMostRenderer = !opt_renderNode;
  if (topMostRenderer) renderNode.sync();
  this.dirty = false;
}
