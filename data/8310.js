{
  if (c.data.moved) {
    var el = c.elm;
    var s = el.style;
    addTransitionClass(el, moveClass);
    s.transform = s.WebkitTransform = s.transitionDuration = "";
    el.addEventListener(
      transitionEndEvent,
      (el._moveCb = function cb(e) {
        if (!e || /transform$/.test(e.propertyName)) {
          el.removeEventListener(transitionEndEvent, cb);
          el._moveCb = null;
          removeTransitionClass(el, moveClass);
        }
      })
    );
  }
}
