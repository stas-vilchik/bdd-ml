{
  var parser = scope.parser;
  var importer = scope.importer;
  var dynamic = {
    added: function(nodes) {
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
    },
    shouldLoadNode: function(node) {
      return (
        node.nodeType === 1 &&
        matches.call(node, importer.loadSelectorsForNode(node))
      );
    },
    shouldParseNode: function(node) {
      return (
        node.nodeType === 1 &&
        matches.call(node, parser.parseSelectorsForNode(node))
      );
    }
  };
  importer.observer.addCallback = dynamic.added.bind(dynamic);
  var matches =
    HTMLElement.prototype.matches ||
    HTMLElement.prototype.matchesSelector ||
    HTMLElement.prototype.webkitMatchesSelector ||
    HTMLElement.prototype.mozMatchesSelector ||
    HTMLElement.prototype.msMatchesSelector;
}
