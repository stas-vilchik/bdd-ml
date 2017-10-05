{
  if (node instanceof wrappers.HTMLTemplateElement) node = node.content;
  var s = "";

  for (var child = node.firstChild; child; child = child.nextSibling) {
    s += getOuterHTML(child, node);
  }

  return s;
}
