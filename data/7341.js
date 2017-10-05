{
  if (
    topLevelType === "topSelectionChange" ||
    topLevelType === "topKeyUp" ||
    topLevelType === "topKeyDown"
  ) {
    return getInstIfValueChanged(activeElementInst);
  }
}
