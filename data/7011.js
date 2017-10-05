{
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
}
