{
  return "deltaX" in event
    ? event.deltaX
    : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
}
