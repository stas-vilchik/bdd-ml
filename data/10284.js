{
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (
    isUndef(data.staticStyle) &&
    isUndef(data.style) &&
    isUndef(oldData.staticStyle) &&
    isUndef(oldData.style)
  ) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {};
  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, "");
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      setProp(el, name, cur == null ? "" : cur);
    }
  }
}
