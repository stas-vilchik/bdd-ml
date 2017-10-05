{
  if (event.type === "keypress") {
    return getEventCharCode(event);
  }

  if (event.type === "keydown" || event.type === "keyup") {
    return event.keyCode;
  }

  return 0;
}
