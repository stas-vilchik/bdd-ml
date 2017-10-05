{
  var options = this.options;
  if (options.attributes)
    node.removeEventListener("DOMAttrModified", this, true);
  if (options.characterData)
    node.removeEventListener("DOMCharacterDataModified", this, true);
  if (options.childList)
    node.removeEventListener("DOMNodeInserted", this, true);
  if (options.childList || options.subtree)
    node.removeEventListener("DOMNodeRemoved", this, true);
}
