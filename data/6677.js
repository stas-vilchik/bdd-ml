{
  offset = toUInt32(offset);
  var s = this.data;
  if (offset > s.length) throw new Error("IndexSizeError");
  var head = s.slice(0, offset);
  var tail = s.slice(offset);
  this.data = head;
  var newTextNode = this.ownerDocument.createTextNode(tail);
  if (this.parentNode)
    this.parentNode.insertBefore(newTextNode, this.nextSibling);
  return newTextNode;
}
