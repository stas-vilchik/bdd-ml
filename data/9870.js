{
  if (expectsCSS) {
    removeTransitionClass(el, toClass);
    removeTransitionClass(el, activeClass);
  }

  if (cb.cancelled) {
    if (expectsCSS) {
      removeTransitionClass(el, startClass);
    }

    enterCancelledHook && enterCancelledHook(el);
  } else {
    afterEnterHook && afterEnterHook(el);
  }

  el._enterCb = null;
}
