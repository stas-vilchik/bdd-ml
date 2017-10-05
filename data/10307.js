{
  if (el.parentNode && el.parentNode._pending) {
    el.parentNode._pending[vnode.key] = null;
  }

  if (expectsCSS) {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
  }

  if (cb.cancelled) {
    if (expectsCSS) {
      removeTransitionClass(el, leaveClass);
    }

    leaveCancelled && leaveCancelled(el);
  } else {
    rm();
    afterLeave && afterLeave(el);
  }

  el._leaveCb = null;
}
