{
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};

  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      elm.setAttr(key, cur);
    }
  }

  for (key in oldAttrs) {
    if (attrs[key] == null) {
      elm.setAttr(key);
    }
  }
}
