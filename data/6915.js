{
  if (node.parentNode) node.parentNode.removeChild(node);
  adoptNodeNoRemove(node, this);
  return node;
}
