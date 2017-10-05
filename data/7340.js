{
  if (topLevelType === "topFocus") {
    stopWatchingForValueChange();
    startWatchingForValueChange(target, targetInst);
  } else if (topLevelType === "topBlur") {
    stopWatchingForValueChange();
  }
}
