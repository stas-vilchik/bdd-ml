{
  if (!activeElement) {
    return;
  }

  activeElement.detachEvent("onpropertychange", handlePropertyChange);
  activeElement = null;
  activeElementInst = null;
}
