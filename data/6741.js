{
  if (!(this instanceof Image)) {
    throw new TypeError(
      "DOM object constructor cannot be called as a function."
    );
  }

  var node = unwrap(document.createElement("img"));
  HTMLElement.call(this, node);
  rewrap(node, this);
  if (width !== undefined) node.width = width;
  if (height !== undefined) node.height = height;
}
