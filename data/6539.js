{
  var phase = CAPTURING_PHASE;

  if (win) {
    if (!invoke(win, event, phase, eventPath, overrideTarget)) return false;
  }

  for (var i = eventPath.length - 1; i > 0; i--) {
    if (!invoke(eventPath[i], event, phase, eventPath, overrideTarget))
      return false;
  }

  return true;
}
