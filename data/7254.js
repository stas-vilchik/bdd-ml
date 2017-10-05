{
  if (__DEV__) {
    var constructor = publicInstance.constructor;
    warning(
      false,
      "%s(...): Can only update a mounted or mounting component. " +
        "This usually means you called %s() on an unmounted component. " +
        "This is a no-op.\n\nPlease check the code for the %s component.",
      callerName,
      callerName,
      (constructor && (constructor.displayName || constructor.name)) ||
        "ReactClass"
    );
  }
}
