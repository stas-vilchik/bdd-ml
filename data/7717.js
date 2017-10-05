{
  if (isStartish(topLevelType)) {
    trackedTouchCount += 1;
  } else if (isEndish(topLevelType)) {
    if (trackedTouchCount >= 0) {
      trackedTouchCount -= 1;
    } else {
      console.error(
        "Ended a touch event which was not counted in `trackedTouchCount`."
      );
      return null;
    }
  }

  ResponderTouchHistoryStore.recordTouchTrack(topLevelType, nativeEvent);
  var extracted = canTriggerTransfer(topLevelType, targetInst, nativeEvent)
    ? setResponderAndExtractTransfer(
        topLevelType,
        targetInst,
        nativeEvent,
        nativeEventTarget
      )
    : null;
  var isResponderTouchStart = responderInst && isStartish(topLevelType);
  var isResponderTouchMove = responderInst && isMoveish(topLevelType);
  var isResponderTouchEnd = responderInst && isEndish(topLevelType);
  var incrementalTouch = isResponderTouchStart
    ? eventTypes.responderStart
    : isResponderTouchMove
      ? eventTypes.responderMove
      : isResponderTouchEnd ? eventTypes.responderEnd : null;

  if (incrementalTouch) {
    var gesture = ResponderSyntheticEvent.getPooled(
      incrementalTouch,
      responderInst,
      nativeEvent,
      nativeEventTarget
    );
    gesture.touchHistory = ResponderTouchHistoryStore.touchHistory;
    EventPropagators.accumulateDirectDispatches(gesture);
    extracted = accumulate(extracted, gesture);
  }

  var isResponderTerminate = responderInst && topLevelType === "topTouchCancel";
  var isResponderRelease =
    responderInst &&
    !isResponderTerminate &&
    isEndish(topLevelType) &&
    noResponderTouches(nativeEvent);
  var finalTouch = isResponderTerminate
    ? eventTypes.responderTerminate
    : isResponderRelease ? eventTypes.responderRelease : null;

  if (finalTouch) {
    var finalEvent = ResponderSyntheticEvent.getPooled(
      finalTouch,
      responderInst,
      nativeEvent,
      nativeEventTarget
    );
    finalEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
    EventPropagators.accumulateDirectDispatches(finalEvent);
    extracted = accumulate(extracted, finalEvent);
    changeResponder(null);
  }

  var numberActiveTouches =
    ResponderTouchHistoryStore.touchHistory.numberActiveTouches;

  if (
    ResponderEventPlugin.GlobalInteractionHandler &&
    numberActiveTouches !== previousActiveTouches
  ) {
    ResponderEventPlugin.GlobalInteractionHandler.onChange(numberActiveTouches);
  }

  previousActiveTouches = numberActiveTouches;
  return extracted;
}
