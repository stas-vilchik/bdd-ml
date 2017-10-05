{
  if (nativeEvent.propertyName !== "value") {
    return;
  }

  if (getInstIfValueChanged(activeElementInst)) {
    manualDispatchChangeEvent(nativeEvent);
  }
}
