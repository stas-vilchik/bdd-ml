{
  var trees = [];

  for (var tree = host.shadowRoot; tree; tree = tree.olderShadowRoot) {
    trees.push(tree);
  }

  return trees;
}
