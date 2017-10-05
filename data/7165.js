{
  detached(node);
  forSubtree(node, function(e) {
    detached(e);
  });
}
