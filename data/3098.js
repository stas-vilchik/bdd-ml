{
  node.x0 = round(node.x);
  node.y0 = round(node.y);
  node.x1 = round(node.x + node.dx);
  node.y1 = round(node.y + node.dy);
  delete node.x;
  delete node.y;
  delete node.dx;
  delete node.dy;

  if (node.children) {
    node.children.reverse();
    node.children.forEach(visit);
  }
}
