{
  if (!(this instanceof Option)) {
    throw new TypeError(
      "DOM object constructor cannot be called as a function."
    );
  }

  var node = unwrap(document.createElement("option"));
  HTMLElement.call(this, node);
  rewrap(node, this);
  if (text !== undefined) node.text = text;
  if (value !== undefined) node.setAttribute("value", value);
  if (defaultSelected === true) node.setAttribute("selected", "");
  node.selected = selected === true;
}
