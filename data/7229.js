{
  if (__DEV__) {
    if (hasOwnProperty.call(config, "ref")) {
      var getter = Object.getOwnPropertyDescriptor(config, "ref").get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}
