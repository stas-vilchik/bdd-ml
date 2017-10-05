{
  assertIsNodeWrapper(newChildWrapper);
  var oldChildNode;

  if (isWrapper(oldChildWrapper)) {
    oldChildNode = unwrap(oldChildWrapper);
  } else {
    oldChildNode = oldChildWrapper;
    oldChildWrapper = wrap(oldChildNode);
  }

  if (oldChildWrapper.parentNode !== this) {
    throw new Error("NotFoundError");
  }

  var nextNode = oldChildWrapper.nextSibling;
  var previousNode = oldChildWrapper.previousSibling;
  var nodes;
  var useNative =
    !this.invalidateShadowRenderer() && !invalidateParent(newChildWrapper);

  if (useNative) {
    nodes = collectNodesNative(newChildWrapper);
  } else {
    if (nextNode === newChildWrapper) nextNode = newChildWrapper.nextSibling;
    nodes = collectNodes(newChildWrapper, this, previousNode, nextNode);
  }

  if (!useNative) {
    if (this.firstChild === oldChildWrapper) this.firstChild_ = nodes[0];
    if (this.lastChild === oldChildWrapper)
      this.lastChild_ = nodes[nodes.length - 1];
    oldChildWrapper.previousSibling_ = oldChildWrapper.nextSibling_ = oldChildWrapper.parentNode_ = undefined;

    if (oldChildNode.parentNode) {
      originalReplaceChild.call(
        oldChildNode.parentNode,
        unwrapNodesForInsertion(this, nodes),
        oldChildNode
      );
    }
  } else {
    ensureSameOwnerDocument(this, newChildWrapper);
    clearChildNodes(this);
    originalReplaceChild.call(
      unsafeUnwrap(this),
      unwrap(newChildWrapper),
      oldChildNode
    );
  }

  enqueueMutation(this, "childList", {
    addedNodes: nodes,
    removedNodes: createOneElementNodeList(oldChildWrapper),
    nextSibling: nextNode,
    previousSibling: previousNode
  });
  nodeWasRemoved(oldChildWrapper);
  nodesWereAdded(nodes, this);
  return oldChildWrapper;
}
