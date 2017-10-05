{
  var ownerDoc =
    parent.nodeType === Node.DOCUMENT_NODE ? parent : parent.ownerDocument;
  if (ownerDoc !== child.ownerDocument) ownerDoc.adoptNode(child);
}
