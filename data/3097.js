{
  node.name = node.data.id.slice(node.data.id.lastIndexOf(".") + 1);
  node.x0 = round(node.x0);
  node.y0 = round(node.y0);
  node.x1 = round(node.x1);
  node.y1 = round(node.y1);
  delete node.id;
  delete node.parent;
  delete node.data;
  delete node._squarify;
  delete node.height;
  if (node.children) node.children.forEach(visit);
}
