{
  var options = this.options;
  if (options.attributes) node.addEventListener("DOMAttrModified", this, true);
  if (options.characterData)
    node.addEventListener("DOMCharacterDataModified", this, true);
  if (options.childList) node.addEventListener("DOMNodeInserted", this, true);
  if (options.childList || options.subtree)
    node.addEventListener("DOMNodeRemoved", this, true);
}
