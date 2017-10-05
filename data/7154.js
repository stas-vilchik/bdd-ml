{
  doc = wrap(doc);

  if (processingDocuments.indexOf(doc) >= 0) {
    return;
  }

  processingDocuments.push(doc);
  var imports = doc.querySelectorAll("link[rel=" + IMPORT_LINK_TYPE + "]");

  for (var i = 0, l = imports.length, n; i < l && (n = imports[i]); i++) {
    if (n.import) {
      _forDocumentTree(n.import, cb);
    }
  }

  cb(doc);
}
