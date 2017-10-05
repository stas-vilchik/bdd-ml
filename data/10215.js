{
  var elm = document.createElement(tagName);

  if (tagName !== "select") {
    return elm;
  }

  if (
    vnode.data &&
    vnode.data.attrs &&
    vnode.data.attrs.multiple !== undefined
  ) {
    elm.setAttribute("multiple", "multiple");
  }

  return elm;
}
