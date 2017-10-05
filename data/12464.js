{
  var el = vnode.elm;

  if (el._leaveCb) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (!data) {
    return;
  }

  if (el._enterCb) {
    return;
  }

  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== "") {
    return;
  }

  var startClass = isAppear ? appearClass : enterClass;
  var toClass = isAppear ? appearToClass : enterToClass;
  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear
    ? typeof appear === "function" ? appear : enter
    : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear
    ? appearCancelled || enterCancelled
    : enterCancelled;
  var userWantsControl =
    enterHook && (enterHook._length || enterHook.length) > 1;
  var stylesheet = vnode.context.$options.style || {};
  var startState = stylesheet[startClass];
  var transitionProperties =
    (stylesheet["@TRANSITION"] && stylesheet["@TRANSITION"][activeClass]) || {};
  var endState = getEnterTargetState(
    el,
    stylesheet,
    startClass,
    toClass,
    activeClass,
    vnode.context
  );
  var needAnimation = Object.keys(endState).length > 0;
  var cb = (el._enterCb = once(function() {
    if (cb.cancelled) {
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  }));
  setTimeout(function() {
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
  }, 16);
  beforeEnterHook && beforeEnterHook(el);

  if (startState) {
    for (var key in startState) {
      el.setStyle(key, startState[key]);
    }
  }

  if (!needAnimation && !userWantsControl) {
    cb();
  }
}
