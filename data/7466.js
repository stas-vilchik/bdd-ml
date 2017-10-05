{
  if (event.type === "keydown" || event.type === "keyup") {
    return event.keyCode;
  }

  return 0;
}
