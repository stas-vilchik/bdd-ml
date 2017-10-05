{
  return (
    topLevelInst &&
    ((topLevelType === "topScroll" && !nativeEvent.responderIgnoreScroll) ||
      (trackedTouchCount > 0 && topLevelType === "topSelectionChange") ||
      isStartish(topLevelType) ||
      isMoveish(topLevelType))
  );
}
