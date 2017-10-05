{
  var parent = el.parentNode;
  var pendingNode = parent && parent._pending && parent._pending[vnode.key];

  if (
    pendingNode &&
    pendingNode.tag === vnode.tag &&
    pendingNode.elm._leaveCb
  ) {
    pendingNode.elm._leaveCb();
  }

  enterHook && enterHook(el, cb);
}
