{
  doc = doc || rootDocument;
  whenDocumentReady(function() {
    watchImportsLoad(callback, doc);
  }, doc);
}
