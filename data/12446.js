{
  for (var i = 0; i < dirsWithPostpatch.length; i++) {
    callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
  }
}
