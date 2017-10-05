{
  if (textContent == null) textContent = "";
  var removedNodes = snapshotNodeList(this.childNodes);

  if (this.invalidateShadowRenderer()) {
    removeAllChildNodes(this);

    if (textContent !== "") {
      var textNode = unsafeUnwrap(this).ownerDocument.createTextNode(
        textContent
      );
      this.appendChild(textNode);
    }
  } else {
    clearChildNodes(this);
    unsafeUnwrap(this).textContent = textContent;
  }

  var addedNodes = snapshotNodeList(this.childNodes);
  enqueueMutation(this, "childList", {
    addedNodes: addedNodes,
    removedNodes: removedNodes
  });
  nodesWereRemoved(removedNodes);
  nodesWereAdded(addedNodes, this);
}
