{
  if (node.isString) {
    renderStringNode(node, context);
  } else if (isDef(node.componentOptions)) {
    renderComponent(node, isRoot, context);
  } else if (isDef(node.tag)) {
    renderElement(node, isRoot, context);
  } else if (isTrue(node.isComment)) {
    if (isDef(node.asyncFactory)) {
      renderAsyncComponent(node, isRoot, context);
    } else {
      context.write("<!--" + node.text + "-->", context.next);
    }
  } else {
    context.write(
      node.raw ? node.text : escape(String(node.text)),
      context.next
    );
  }
}
