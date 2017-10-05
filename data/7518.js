{
  var node = (getTestDocument() || document).createElement("div");
  node.innerHTML = html;
  return node;
}
