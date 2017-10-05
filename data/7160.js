{
  attached(node);

  if (inDocument(node)) {
    forSubtree(node, function(e) {
      attached(e);
    });
  }
}
