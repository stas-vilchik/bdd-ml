{
  var parent = nodeOps.parentNode(el);

  if (isDef(parent)) {
    nodeOps.removeChild(parent, el);
  }
}
