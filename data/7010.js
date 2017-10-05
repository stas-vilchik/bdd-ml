{
  var urlResolver = scope.urlResolver;

  if (window.HTMLImports && !HTMLImports.useNative) {
    var SHIM_SHEET_SELECTOR =
      "link[rel=stylesheet]" + "[" + SHIM_ATTRIBUTE + "]";
    var SHIM_STYLE_SELECTOR = "style[" + SHIM_ATTRIBUTE + "]";
    HTMLImports.importer.documentPreloadSelectors += "," + SHIM_SHEET_SELECTOR;
    HTMLImports.importer.importsPreloadSelectors += "," + SHIM_SHEET_SELECTOR;
    HTMLImports.parser.documentSelectors = [
      HTMLImports.parser.documentSelectors,
      SHIM_SHEET_SELECTOR,
      SHIM_STYLE_SELECTOR
    ].join(",");
    var originalParseGeneric = HTMLImports.parser.parseGeneric;

    HTMLImports.parser.parseGeneric = function(elt) {
      if (elt[SHIMMED_ATTRIBUTE]) {
        return;
      }

      var style = elt.__importElement || elt;

      if (!style.hasAttribute(SHIM_ATTRIBUTE)) {
        originalParseGeneric.call(this, elt);
        return;
      }

      if (elt.__resource) {
        style = elt.ownerDocument.createElement("style");
        style.textContent = elt.__resource;
      }

      HTMLImports.path.resolveUrlsInStyle(style);
      style.textContent = ShadowCSS.shimStyle(style);
      style.removeAttribute(SHIM_ATTRIBUTE, "");
      style.setAttribute(SHIMMED_ATTRIBUTE, "");
      style[SHIMMED_ATTRIBUTE] = true;

      if (style.parentNode !== head) {
        if (elt.parentNode === head) {
          head.replaceChild(style, elt);
        } else {
          this.addElementToDocument(style);
        }
      }

      style.__importParsed = true;
      this.markParsingComplete(elt);
      this.parseNext();
    };

    var hasResource = HTMLImports.parser.hasResource;

    HTMLImports.parser.hasResource = function(node) {
      if (
        node.localName === "link" &&
        node.rel === "stylesheet" &&
        node.hasAttribute(SHIM_ATTRIBUTE)
      ) {
        return node.__resource;
      } else {
        return hasResource.call(this, node);
      }
    };
  }
}
