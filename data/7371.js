{
  if (value == null) {
    return node.removeAttribute("value");
  }

  if (node.type !== "number" || node.hasAttribute("value") === false) {
    node.setAttribute("value", "" + value);
  } else if (
    node.validity &&
    !node.validity.badInput &&
    node.ownerDocument.activeElement !== node
  ) {
    node.setAttribute("value", "" + value);
  }
}
