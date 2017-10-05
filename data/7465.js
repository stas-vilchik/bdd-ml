{
  if (event.type === "keypress") {
    return getEventCharCode(event);
  }

  return 0;
}
