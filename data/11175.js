{
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }

  var ref = node.asyncMeta;
  var data = ref.data;
  var children = ref.children;
  var tag = ref.tag;
  var nodeContext = node.asyncMeta.context;
  var resolvedNode = createComponent(comp, data, nodeContext, children, tag);

  if (resolvedNode) {
    renderComponent(resolvedNode, isRoot, context);
  } else {
    reject();
  }
}
