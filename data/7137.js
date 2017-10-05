{
  var doc = document.implementation.createHTMLDocument(IMPORT_LINK_TYPE);
  doc._URL = url;
  var base = doc.createElement("base");
  base.setAttribute("href", url);

  if (!doc.baseURI) {
    doc.baseURI = url;
  }

  var meta = doc.createElement("meta");
  meta.setAttribute("charset", "utf-8");
  doc.head.appendChild(meta);
  doc.head.appendChild(base);
  doc.body.innerHTML = resource;

  if (window.HTMLTemplateElement && HTMLTemplateElement.bootstrap) {
    HTMLTemplateElement.bootstrap(doc);
  }

  return doc;
}
