{
  if (doc.readyState === "complete" || doc.readyState === requiredReadyState) {
    doc.removeEventListener(READY_EVENT, checkReady);
    whenDocumentReady(callback, doc);
  }
}
