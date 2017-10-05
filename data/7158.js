{
  forSubtree(node, function(e) {
    if (added(e)) {
      return true;
    }
  });
}
