{
  var value = ref.value;
  var oldValue = ref.oldValue;

  if (value === oldValue) {
    return;
  }

  vnode = locateNode(vnode);
  var transition$$1 = vnode.data && vnode.data.transition;

  if (transition$$1) {
    vnode.data.show = true;

    if (value) {
      enter(vnode, function() {
        el.style.display = el.__vOriginalDisplay;
      });
    } else {
      leave(vnode, function() {
        el.style.display = "none";
      });
    }
  } else {
    el.style.display = value ? el.__vOriginalDisplay : "none";
  }
}
