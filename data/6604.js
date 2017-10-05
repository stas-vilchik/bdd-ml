{
  enqueueMutation(parent, "childList", {
    removedNodes: nodes,
    previousSibling: node.previousSibling,
    nextSibling: node.nextSibling
  });
}
