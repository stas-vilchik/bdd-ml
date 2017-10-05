{
  node.name = node.data.id.slice(node.data.id.lastIndexOf(".") + 1);
  node.x = round(node.x);
  node.y = round(node.y);
  node.r = round(node.r);
  delete node.id;
  delete node.parent;
  delete node.data;
  delete node.depth;
  delete node.height;
  if (node.children) node.children.forEach(visit);
}
