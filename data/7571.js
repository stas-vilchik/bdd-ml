{
  if (!ReactTestUtils.isCompositeComponent(inst)) {
    return false;
  }

  var internalInstance = ReactInstanceMap.get(inst);
  var constructor =
    typeof internalInstance.tag === "number"
      ? internalInstance.type
      : internalInstance._currentElement.type;
  return constructor === type;
}
