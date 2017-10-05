{
  return mergeData(
    typeof childVal === "function" ? childVal.call(this) : childVal,
    typeof parentVal === "function" ? parentVal.call(this) : parentVal
  );
}
