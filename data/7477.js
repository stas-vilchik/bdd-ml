{
  return "deltaY" in event
    ? event.deltaY
    : "wheelDeltaY" in event
      ? -event.wheelDeltaY
      : "wheelDelta" in event ? -event.wheelDelta : 0;
}
