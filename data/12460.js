{
  if (!oldVnode.data.style && !vnode.data.style) {
    return;
  }

  var cur, name;
  var elm = vnode.elm;
  var oldStyle = oldVnode.data.style || {};
  var style = vnode.data.style || {};
  var needClone = style.__ob__;

  if (Array.isArray(style)) {
    style = vnode.data.style = toObject$1(style);
  }

  if (needClone) {
    style = vnode.data.style = extend({}, style);
  }

  for (name in oldStyle) {
    if (!style[name]) {
      elm.setStyle(normalize(name), "");
    }
  }

  for (name in style) {
    cur = style[name];
    elm.setStyle(normalize(name), cur);
  }
}
