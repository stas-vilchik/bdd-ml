{
  addTransitionClass(el, leaveToClass);
  removeTransitionClass(el, leaveClass);

  if (!cb.cancelled && !userWantsControl) {
    if (isValidDuration(explicitLeaveDuration)) {
      setTimeout(cb, explicitLeaveDuration);
    } else {
      whenTransitionEnds(el, type, cb);
    }
  }
}
