{
  var doc = style.ownerDocument;
  var resolver = doc.createElement("a");
  style.textContent = this.resolveUrlsInCssText(style.textContent, resolver);
  return style;
}
