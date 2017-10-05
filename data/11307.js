{
  var styleText = genStyle(getStyle(vnode, false));

  if (styleText !== "") {
    return " style=" + JSON.stringify(escape(styleText));
  }
}
