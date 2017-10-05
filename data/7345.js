{
  if (inst == null) {
    return;
  }

  let state = inst._wrapperState || node._wrapperState;

  if (!state || !state.controlled || node.type !== "number") {
    return;
  }

  let value = "" + node.value;

  if (node.getAttribute("value") !== value) {
    node.setAttribute("value", value);
  }
}
