{
  if (cb.cancelled) {
    enterCancelledHook && enterCancelledHook(el);
  } else {
    afterEnterHook && afterEnterHook(el);
  }

  el._enterCb = null;
}
