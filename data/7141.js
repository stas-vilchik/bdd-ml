{
  return (
    node.nodeType === 1 &&
    matches.call(node, importer.loadSelectorsForNode(node))
  );
}
