{
  var value = ref.value;
  vnode = locateNode(vnode);
  var transition$$1 = vnode.data && vnode.data.transition;
  var originalDisplay = (el.__vOriginalDisplay =
    el.style.display === "none" ? "" : el.style.display);

  if (value && transition$$1) {
    vnode.data.show = true;
    enter(vnode, function() {
      el.style.display = originalDisplay;
    });
  } else {
    el.style.display = value ? originalDisplay : "none";
  }
}
