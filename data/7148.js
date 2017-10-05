{
  var IMPORT_LINK_TYPE = window.HTMLImports
    ? HTMLImports.IMPORT_LINK_TYPE
    : "none";

  function forSubtree(node, cb) {
    findAllElements(node, function(e) {
      if (cb(e)) {
        return true;
      }

      forRoots(e, cb);
    });
    forRoots(node, cb);
  }

  function findAllElements(node, find, data) {
    var e = node.firstElementChild;

    if (!e) {
      e = node.firstChild;

      while (e && e.nodeType !== Node.ELEMENT_NODE) {
        e = e.nextSibling;
      }
    }

    while (e) {
      if (find(e, data) !== true) {
        findAllElements(e, find, data);
      }

      e = e.nextElementSibling;
    }

    return null;
  }

  function forRoots(node, cb) {
    var root = node.shadowRoot;

    while (root) {
      forSubtree(root, cb);
      root = root.olderShadowRoot;
    }
  }

  var processingDocuments;

  function forDocumentTree(doc, cb) {
    processingDocuments = [];

    _forDocumentTree(doc, cb);

    processingDocuments = null;
  }

  function _forDocumentTree(doc, cb) {
    doc = wrap(doc);

    if (processingDocuments.indexOf(doc) >= 0) {
      return;
    }

    processingDocuments.push(doc);
    var imports = doc.querySelectorAll("link[rel=" + IMPORT_LINK_TYPE + "]");

    for (var i = 0, l = imports.length, n; i < l && (n = imports[i]); i++) {
      if (n.import) {
        _forDocumentTree(n.import, cb);
      }
    }

    cb(doc);
  }

  scope.forDocumentTree = forDocumentTree;
  scope.forSubtree = forSubtree;
}
