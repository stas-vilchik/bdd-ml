{
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];

  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, "default")) {
      value = false;
    } else if (
      !isType(String, prop.type) &&
      (value === "" || value === hyphenate(key))
    ) {
      value = true;
    }
  }

  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }

  if (process.env.NODE_ENV !== "production") {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
