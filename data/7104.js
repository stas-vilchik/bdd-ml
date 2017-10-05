{
  elt.__importParsed = true;
  this.markDynamicParsingComplete(elt);

  if (elt.__importElement) {
    elt.__importElement.__importParsed = true;
    this.markDynamicParsingComplete(elt.__importElement);
  }

  this.parsingElement = null;
  flags.parse && console.log("completed", elt);
}
