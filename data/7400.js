{
  if (!ReactDOMEventListener._enabled) {
    return;
  }

  var nativeEventTarget = getEventTarget(nativeEvent);
  var targetInst = ReactDOMComponentTree.getClosestInstanceFromNode(
    nativeEventTarget
  );

  if (
    targetInst !== null &&
    typeof targetInst.tag === "number" &&
    !ReactFiberTreeReflection.isFiberMounted(targetInst)
  ) {
    targetInst = null;
  }

  var bookKeeping = getTopLevelCallbackBookKeeping(
    topLevelType,
    nativeEvent,
    targetInst
  );

  try {
    ReactGenericBatching.batchedUpdates(handleTopLevelImpl, bookKeeping);
  } finally {
    releaseTopLevelCallbackBookKeeping(bookKeeping);
  }
}
