{
  Object.defineProperty(ReactComponent.prototype, methodName, {
    get: function() {
      lowPriorityWarning(
        false,
        "%s(...) is deprecated in plain JavaScript React classes. %s",
        info[0],
        info[1]
      );
      return undefined;
    }
  });
}
