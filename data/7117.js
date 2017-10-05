{
  if (doc && this._mayParse.indexOf(doc) < 0) {
    this._mayParse.push(doc);

    var nodes = doc.querySelectorAll(this.parseSelectorsForNode(doc));

    for (var i = 0, l = nodes.length, p = 0, n; i < l && (n = nodes[i]); i++) {
      if (!this.isParsed(n)) {
        if (this.hasResource(n)) {
          return nodeIsImport(n) ? this.nextToParseInDoc(n.import, n) : n;
        } else {
          return;
        }
      }
    }
  }

  return link;
}
