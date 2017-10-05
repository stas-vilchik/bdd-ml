{
  if (this.isParsed(elt)) {
    flags.parse && console.log("[%s] is already parsed", elt.localName);
    return;
  }

  var fn = this[this.map[elt.localName]];

  if (fn) {
    this.markParsing(elt);
    fn.call(this, elt);
  }
}
