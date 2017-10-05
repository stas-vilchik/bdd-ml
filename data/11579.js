{
  var prevActive = context.activeInstance;
  node.ssrContext = context.userContext;
  var child = (context.activeInstance = createComponentInstanceForVnode(
    node,
    context.activeInstance
  ));
  normalizeRender(child);

  var childNode = child._render();

  childNode.parent = node;
  context.renderStates.push({
    type: "Component",
    prevActive: prevActive
  });
  renderNode(childNode, isRoot, context);
}
