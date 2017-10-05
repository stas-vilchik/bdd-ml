{
  assertIsNodeWrapper(childWrapper);
  var refNode;

  if (refWrapper) {
    if (isWrapper(refWrapper)) {
      refNode = unwrap(refWrapper);
    } else {
      refNode = refWrapper;
      refWrapper = wrap(refNode);
    }
  } else {
    refWrapper = null;
    refNode = null;
  }

  refWrapper && assert(refWrapper.parentNode === this);
  var nodes;
  var previousNode = refWrapper ? refWrapper.previousSibling : this.lastChild;
  var useNative =
    !this.invalidateShadowRenderer() && !invalidateParent(childWrapper);
  if (useNative) nodes = collectNodesNative(childWrapper);
  else nodes = collectNodes(childWrapper, this, previousNode, refWrapper);

  if (useNative) {
    ensureSameOwnerDocument(this, childWrapper);
    clearChildNodes(this);
    originalInsertBefore.call(
      unsafeUnwrap(this),
      unwrap(childWrapper),
      refNode
    );
  } else {
    if (!previousNode) this.firstChild_ = nodes[0];

    if (!refWrapper) {
      this.lastChild_ = nodes[nodes.length - 1];
      if (this.firstChild_ === undefined) this.firstChild_ = this.firstChild;
    }

    var parentNode = refNode ? refNode.parentNode : unsafeUnwrap(this);

    if (parentNode) {
      originalInsertBefore.call(
        parentNode,
        unwrapNodesForInsertion(this, nodes),
        refNode
      );
    } else {
      adoptNodesIfNeeded(this, nodes);
    }
  }

  enqueueMutation(this, "childList", {
    addedNodes: nodes,
    nextSibling: refWrapper,
    previousSibling: previousNode
  });
  nodesWereAdded(nodes, this);
  return childWrapper;
}
