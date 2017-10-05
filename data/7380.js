{
  return (
    (node.nodeType === ELEMENT_NODE &&
      node.getAttribute(ATTR_NAME) === "" + nodeID) ||
    (node.nodeType === COMMENT_NODE &&
      node.nodeValue === " react-text: " + nodeID + " ") ||
    (node.nodeType === COMMENT_NODE &&
      node.nodeValue === " react-empty: " + nodeID + " ")
  );
}
