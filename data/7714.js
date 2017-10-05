{
  var shouldSetEventType = isStartish(topLevelType)
    ? eventTypes.startShouldSetResponder
    : isMoveish(topLevelType)
      ? eventTypes.moveShouldSetResponder
      : topLevelType === "topSelectionChange"
        ? eventTypes.selectionChangeShouldSetResponder
        : eventTypes.scrollShouldSetResponder;
  var bubbleShouldSetFrom = !responderInst
    ? targetInst
    : ReactTreeTraversal.getLowestCommonAncestor(responderInst, targetInst);
  var skipOverBubbleShouldSetFrom = bubbleShouldSetFrom === responderInst;
  var shouldSetEvent = ResponderSyntheticEvent.getPooled(
    shouldSetEventType,
    bubbleShouldSetFrom,
    nativeEvent,
    nativeEventTarget
  );
  shouldSetEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;

  if (skipOverBubbleShouldSetFrom) {
    EventPropagators.accumulateTwoPhaseDispatchesSkipTarget(shouldSetEvent);
  } else {
    EventPropagators.accumulateTwoPhaseDispatches(shouldSetEvent);
  }

  var wantsResponderInst = executeDispatchesInOrderStopAtTrue(shouldSetEvent);

  if (!shouldSetEvent.isPersistent()) {
    shouldSetEvent.constructor.release(shouldSetEvent);
  }

  if (!wantsResponderInst || wantsResponderInst === responderInst) {
    return null;
  }

  var extracted;
  var grantEvent = ResponderSyntheticEvent.getPooled(
    eventTypes.responderGrant,
    wantsResponderInst,
    nativeEvent,
    nativeEventTarget
  );
  grantEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
  EventPropagators.accumulateDirectDispatches(grantEvent);
  var blockHostResponder = executeDirectDispatch(grantEvent) === true;

  if (responderInst) {
    var terminationRequestEvent = ResponderSyntheticEvent.getPooled(
      eventTypes.responderTerminationRequest,
      responderInst,
      nativeEvent,
      nativeEventTarget
    );
    terminationRequestEvent.touchHistory =
      ResponderTouchHistoryStore.touchHistory;
    EventPropagators.accumulateDirectDispatches(terminationRequestEvent);
    var shouldSwitch =
      !hasDispatches(terminationRequestEvent) ||
      executeDirectDispatch(terminationRequestEvent);

    if (!terminationRequestEvent.isPersistent()) {
      terminationRequestEvent.constructor.release(terminationRequestEvent);
    }

    if (shouldSwitch) {
      var terminateEvent = ResponderSyntheticEvent.getPooled(
        eventTypes.responderTerminate,
        responderInst,
        nativeEvent,
        nativeEventTarget
      );
      terminateEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
      EventPropagators.accumulateDirectDispatches(terminateEvent);
      extracted = accumulate(extracted, [grantEvent, terminateEvent]);
      changeResponder(wantsResponderInst, blockHostResponder);
    } else {
      var rejectEvent = ResponderSyntheticEvent.getPooled(
        eventTypes.responderReject,
        wantsResponderInst,
        nativeEvent,
        nativeEventTarget
      );
      rejectEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
      EventPropagators.accumulateDirectDispatches(rejectEvent);
      extracted = accumulate(extracted, rejectEvent);
    }
  } else {
    extracted = accumulate(extracted, grantEvent);
    changeResponder(wantsResponderInst, blockHostResponder);
  }

  return extracted;
}
