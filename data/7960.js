{
  if (!hasOwn(prop, "default")) {
    return undefined;
  }

  var def = prop.default;

  if (process.env.NODE_ENV !== "production" && isObject(def)) {
    warn(
      'Invalid default value for prop "' +
        key +
        '": ' +
        "Props with type Object/Array must use a factory function " +
        "to return the default value.",
      vm
    );
  }

  if (
    vm &&
    vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key];
  }

  return typeof def === "function" && getType(prop.type) !== "Function"
    ? def.call(vm)
    : def;
}
