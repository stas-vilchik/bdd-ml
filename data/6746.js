{
  var doc = getTemplateContentsOwner(templateElement.ownerDocument);
  var df = unwrap(doc.createDocumentFragment());
  var child;

  while ((child = templateElement.firstChild)) {
    df.appendChild(child);
  }

  return df;
}
