{
  var owner, parsed;

  for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
    if (!owner) {
      owner = n.ownerDocument;
      parsed = parser.isParsed(owner);
    }

    loading = this.shouldLoadNode(n);

    if (loading) {
      importer.loadNode(n);
    }

    if (this.shouldParseNode(n) && parsed) {
      parser.parseDynamic(n, loading);
    }
  }
}
