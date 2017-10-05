{
  if (nodeIsImport(linkElt)) {
    this.parseImport(linkElt);
  } else {
    linkElt.href = linkElt.href;
    this.parseGeneric(linkElt);
  }
}
