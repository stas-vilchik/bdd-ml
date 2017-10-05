{
  activeElement = target;
  activeElementInst = targetInst;
  activeElement.attachEvent("onpropertychange", handlePropertyChange);
}
