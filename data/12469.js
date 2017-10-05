{
  var animation = vnode.context.$requireWeexModule("animation");

  if (cb.cancelled) {
    return;
  }

  if (!vnode.data.show) {
    (el.parentNode._pending || (el.parentNode._pending = {}))[
      vnode.key
    ] = vnode;
  }

  beforeLeave && beforeLeave(el);

  if (startState) {
    animation.transition(
      el.ref,
      {
        styles: startState
      },
      next
    );
  } else {
    next();
  }

  function next() {
    animation.transition(
      el.ref,
      {
        styles: endState,
        duration: transitionProperties.duration || 0,
        delay: transitionProperties.delay || 0,
        timingFunction: transitionProperties.timingFunction || "linear"
      },
      userWantsControl ? noop : cb
    );
  }

  leave && leave(el, cb);

  if (!endState && !userWantsControl) {
    cb();
  }
}
