{
  var parent = el.parentNode;
  var pendingNode = parent && parent._pending && parent._pending[vnode.key];

  if (
    pendingNode &&
    pendingNode.context === vnode.context &&
    pendingNode.tag === vnode.tag &&
    pendingNode.elm._leaveCb
  ) {
    pendingNode.elm._leaveCb();
  }

  enterHook && enterHook(el, cb);

  if (needAnimation) {
    var animation = vnode.context.$requireWeexModule("animation");
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
  } else if (!userWantsControl) {
    cb();
  }
}
