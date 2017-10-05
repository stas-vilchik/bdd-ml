{
  doc = wrap(doc);
  flags.dom && console.group("upgradeDocument: ", doc.baseURI.split("/").pop());
  addedNode(doc);
  observe(doc);
  flags.dom && console.groupEnd();
}
