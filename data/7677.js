{
  var allTouchObjects = allTouchHandles.map(touch);
  var changedTouchObjects = subsequence(allTouchObjects, changedIndices);
  var activeTouchObjects =
    topType === "topTouchStart"
      ? allTouchObjects
      : topType === "topTouchMove"
        ? allTouchObjects
        : topType === "topTouchEnd"
          ? antiSubsequence(allTouchObjects, changedIndices)
          : topType === "topTouchCancel"
            ? antiSubsequence(allTouchObjects, changedIndices)
            : null;
  return {
    nativeEvent: touchEvent(
      targetNodeHandle,
      activeTouchObjects,
      changedTouchObjects
    ),
    topLevelType: topType,
    targetInst: getInstanceFromNode(targetNodeHandle)
  };
}
