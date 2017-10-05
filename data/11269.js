{
  var instanceData =
    typeof childVal === "function" ? childVal.call(vm) : childVal;
  var defaultData =
    typeof parentVal === "function" ? parentVal.call(vm) : parentVal;

  if (instanceData) {
    return mergeData(instanceData, defaultData);
  } else {
    return defaultData;
  }
}
