{
  this._mayParse = [];
  return (
    !this.parsingElement &&
    (this.nextToParseInDoc(rootDocument) || this.nextToParseDynamic())
  );
}
