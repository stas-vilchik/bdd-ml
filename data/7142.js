{
  return (
    node.nodeType === 1 &&
    matches.call(node, parser.parseSelectorsForNode(node))
  );
}
