{
  if (__DEV__) {
    if (hasOwnProperty.call(config, "key")) {
      var getter = Object.getOwnPropertyDescriptor(config, "key").get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}
