{
  var clone = style.ownerDocument.createElement("style");
  clone.textContent = style.textContent;
  path.resolveUrlsInStyle(clone);
  return clone;
}
