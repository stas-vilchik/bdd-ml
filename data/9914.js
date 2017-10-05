{
  var children = this.prevChildren;
  var moveClass = this.moveClass || (this.name || "v") + "-move";

  if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
    return;
  }

  children.forEach(callPendingCbs);
  children.forEach(recordPosition);
  children.forEach(applyTranslation);
  var body = document.body;
  var f = body.offsetHeight;
  children.forEach(function(c) {
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
  });
}
