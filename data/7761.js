{
  var Interface = this.constructor.Interface;

  for (var propName in Interface) {
    if (__DEV__) {
      Object.defineProperty(
        this,
        propName,
        getPooledWarningPropertyDefinition(propName, Interface[propName])
      );
    } else {
      this[propName] = null;
    }
  }

  for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
    this[shouldBeReleasedProperties[i]] = null;
  }

  if (__DEV__) {
    Object.defineProperty(
      this,
      "nativeEvent",
      getPooledWarningPropertyDefinition("nativeEvent", null)
    );
    Object.defineProperty(
      this,
      "preventDefault",
      getPooledWarningPropertyDefinition("preventDefault", emptyFunction)
    );
    Object.defineProperty(
      this,
      "stopPropagation",
      getPooledWarningPropertyDefinition("stopPropagation", emptyFunction)
    );
  }
}
