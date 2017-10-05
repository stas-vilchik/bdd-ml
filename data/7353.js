{
  if (
    mouseDown ||
    activeElement == null ||
    activeElement !== getActiveElement()
  ) {
    return null;
  }

  var currentSelection = getSelection(activeElement);

  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
    lastSelection = currentSelection;
    var syntheticEvent = SyntheticEvent.getPooled(
      eventTypes.select,
      activeElementInst,
      nativeEvent,
      nativeEventTarget
    );
    syntheticEvent.type = "select";
    syntheticEvent.target = activeElement;
    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
    return syntheticEvent;
  }

  return null;
}
