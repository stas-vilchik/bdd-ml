{
  addTransitionClass(el, toClass);
  removeTransitionClass(el, startClass);

  if (!cb.cancelled && !userWantsControl) {
    if (isValidDuration(explicitEnterDuration)) {
      setTimeout(cb, explicitEnterDuration);
    } else {
      whenTransitionEnds(el, type, cb);
    }
  }
}
