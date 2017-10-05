{
  var warnAboutAccessingRef = function() {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(
        false,
        "%s: `ref` is not a prop. Trying to access it will result " +
          "in `undefined` being returned. If you need to access the same " +
          "value within the child component, you should pass it as a different " +
          "prop. (https://fb.me/react-special-props)",
        displayName
      );
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, "ref", {
    get: warnAboutAccessingRef,
    configurable: true
  });
}
