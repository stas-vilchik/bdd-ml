{
  var el = vnode.elm;
  var ctx = vnode.context;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (
    !data.staticClass &&
    !data.class &&
    (!oldData || (!oldData.staticClass && !oldData.class))
  ) {
    return;
  }

  var oldClassList = [];
  var oldStaticClass = oldData.staticClass;

  if (oldStaticClass) {
    oldClassList.push.apply(oldClassList, oldStaticClass);
  }

  if (oldData.class) {
    oldClassList.push.apply(oldClassList, oldData.class);
  }

  var classList = [];
  var staticClass = data.staticClass;

  if (staticClass) {
    classList.push.apply(classList, staticClass);
  }

  if (data.class) {
    classList.push.apply(classList, data.class);
  }

  var style = getStyle(oldClassList, classList, ctx);

  for (var key in style) {
    el.setStyle(key, style[key]);
  }
}
