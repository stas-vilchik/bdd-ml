{
  var url = elt.src || elt.href;
  elt.__nodeUrl = url;

  if (!this.dedupe(url, elt)) {
    this.fetch(url, elt);
  }
}
