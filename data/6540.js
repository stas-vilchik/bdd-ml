{
  var phase = AT_TARGET;
  var currentTarget = eventPath[0] || win;
  return invoke(currentTarget, event, phase, eventPath, overrideTarget);
}
