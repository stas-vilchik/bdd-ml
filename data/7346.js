{
  var targetNode = targetInst
    ? ReactDOMComponentTree.getNodeFromInstance(targetInst)
    : window;
  var getTargetInstFunc, handleEventFunc;

  if (shouldUseChangeEvent(targetNode)) {
    getTargetInstFunc = getTargetInstForChangeEvent;
  } else if (isTextInputElement(targetNode)) {
    if (isInputEventSupported) {
      getTargetInstFunc = getTargetInstForInputOrChangeEvent;
    } else {
      getTargetInstFunc = getTargetInstForInputEventPolyfill;
      handleEventFunc = handleEventsForInputEventPolyfill;
    }
  } else if (shouldUseClickEvent(targetNode)) {
    getTargetInstFunc = getTargetInstForClickEvent;
  }

  if (getTargetInstFunc) {
    var inst = getTargetInstFunc(topLevelType, targetInst);

    if (inst) {
      var event = createAndAccumulateChangeEvent(
        inst,
        nativeEvent,
        nativeEventTarget
      );
      return event;
    }
  }

  if (handleEventFunc) {
    handleEventFunc(topLevelType, targetNode, targetInst);
  }

  if (topLevelType === "topBlur") {
    handleControlledInputBlur(targetInst, targetNode);
  }
}
