{
  if (!vm) {
    if (childVal && typeof childVal !== "function") {
      "development" !== "production" &&
        warn(
          'The "data" option should be a function ' +
            "that returns a per-instance value in component " +
            "definitions.",
          vm
        );
      return parentVal;
    }

    return mergeDataOrFn.call(this, parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
}
