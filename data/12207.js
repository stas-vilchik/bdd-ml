{
  if (!vm) {
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    }

    return function mergedDataFn() {
      return mergeData(
        typeof childVal === "function" ? childVal.call(this) : childVal,
        typeof parentVal === "function" ? parentVal.call(this) : parentVal
      );
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      var instanceData =
        typeof childVal === "function" ? childVal.call(vm) : childVal;
      var defaultData =
        typeof parentVal === "function" ? parentVal.call(vm) : undefined;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}
