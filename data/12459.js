{
  if (!vnode.data.staticStyle) {
    updateStyle(oldVnode, vnode);
    return;
  }

  var elm = vnode.elm;
  var staticStyle = vnode.data.staticStyle;

  for (var name in staticStyle) {
    if (staticStyle[name]) {
      elm.setStyle(normalize(name), staticStyle[name]);
    }
  }

  updateStyle(oldVnode, vnode);
}
