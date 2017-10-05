{
  var port = this.rootImportForElement(elt.__importElement || elt);
  var l = (port.__insertedElements = port.__insertedElements || 0);
  var refNode = port.nextElementSibling;

  for (var i = 0; i < l; i++) {
    refNode = refNode && refNode.nextElementSibling;
  }

  port.parentNode.insertBefore(elt, refNode);
}
