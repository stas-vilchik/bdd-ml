{
  if (!doc.defaultView) return doc;
  var d = templateContentsOwnerTable.get(doc);

  if (!d) {
    d = doc.implementation.createHTMLDocument("");

    while (d.lastChild) {
      d.removeChild(d.lastChild);
    }

    templateContentsOwnerTable.set(doc, d);
  }

  return d;
}
