{
  if (!e || /transform$/.test(e.propertyName)) {
    el.removeEventListener(transitionEndEvent, cb);
    el._moveCb = null;
    removeTransitionClass(el, moveClass);
  }
}
