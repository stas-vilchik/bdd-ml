{
  if (el.parentNode && el.parentNode._pending) {
    el.parentNode._pending[vnode.key] = null;
  }

  if (cb.cancelled) {
    leaveCancelled && leaveCancelled(el);
  } else {
    rm();
    afterLeave && afterLeave(el);
  }

  el._leaveCb = null;
}
