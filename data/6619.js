{
  for (var i = 0, n; i < nodes.length; i++) {
    n = nodes[i];
    n.parentNode.removeChild(n);
  }
}
