{
  node.x = round(node.x);
  node.y = round(node.y);
  node.r = round(node.r);
  if (node.children) node.children.forEach(visit);
}
