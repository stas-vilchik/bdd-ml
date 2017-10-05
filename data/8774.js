{
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(
        e,
        vnode.context,
        "directive " + dir.name + " " + hook + " hook"
      );
    }
  }
}
