{
  var tagName = opt_tagName || "div";
  node.textContent = "";
  var tempElement = unwrap(node.ownerDocument.createElement(tagName));
  tempElement.innerHTML = value;
  var firstChild;

  while ((firstChild = tempElement.firstChild)) {
    node.appendChild(wrap(firstChild));
  }
}
