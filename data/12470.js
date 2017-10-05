{
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
