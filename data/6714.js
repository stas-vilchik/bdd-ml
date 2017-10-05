{
  if (oldIe && plaintextParents[this.localName]) {
    this.textContent = value;
    return;
  }

  var removedNodes = snapshotNodeList(this.childNodes);

  if (this.invalidateShadowRenderer()) {
    if (this instanceof wrappers.HTMLTemplateElement)
      setInnerHTML(this.content, value);
    else setInnerHTML(this, value, this.tagName);
  } else if (
    !OriginalHTMLTemplateElement &&
    this instanceof wrappers.HTMLTemplateElement
  ) {
    setInnerHTML(this.content, value);
  } else {
    unsafeUnwrap(this).innerHTML = value;
  }

  var addedNodes = snapshotNodeList(this.childNodes);
  enqueueMutation(this, "childList", {
    addedNodes: addedNodes,
    removedNodes: removedNodes
  });
  nodesWereRemoved(removedNodes);
  nodesWereAdded(addedNodes, this);
}
