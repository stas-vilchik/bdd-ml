{
  if (!vm) {
    if (childVal && typeof childVal !== "function") {
      process.env.NODE_ENV !== "production" &&
        warn$1(
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
