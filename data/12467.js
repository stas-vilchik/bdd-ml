{
  var el = vnode.elm;

  if (el._enterCb) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (!data) {
    return rm();
  }

  if (el._leaveCb) {
    return;
  }

  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var userWantsControl = leave && (leave._length || leave.length) > 1;
  var stylesheet = vnode.context.$options.style || {};
  var startState = stylesheet[leaveClass];
  var endState = stylesheet[leaveToClass] || stylesheet[leaveActiveClass];
  var transitionProperties =
    (stylesheet["@TRANSITION"] &&
      stylesheet["@TRANSITION"][leaveActiveClass]) ||
    {};
  var cb = (el._leaveCb = once(function() {
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
  }));

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
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
}
