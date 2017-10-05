{
  var phase = BUBBLING_PHASE;

  for (var i = 1; i < eventPath.length; i++) {
    if (!invoke(eventPath[i], event, phase, eventPath, overrideTarget)) return;
  }

  if (win && eventPath.length > 0) {
    invoke(win, event, phase, eventPath, overrideTarget);
  }
}
