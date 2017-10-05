{
  if (!(this instanceof Audio)) {
    throw new TypeError(
      "DOM object constructor cannot be called as a function."
    );
  }

  var node = unwrap(document.createElement("audio"));
  HTMLMediaElement.call(this, node);
  rewrap(node, this);
  node.setAttribute("preload", "auto");
  if (src !== undefined) node.setAttribute("src", src);
}
