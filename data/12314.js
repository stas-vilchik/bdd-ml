{
  var data = vm.$options.data;
  data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== "production" &&
      warn(
        "data functions should return an object:\n" +
          "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",
        vm
      );
  }

  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (process.env.NODE_ENV !== "production") {
      if (methods && hasOwn(methods, key)) {
        warn(
          'method "' + key + '" has already been defined as a data property.',
          vm
        );
      }
    }

    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== "production" &&
        warn(
          'The data property "' +
            key +
            '" is already declared as a prop. ' +
            "Use prop default value instead.",
          vm
        );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }

  observe(data, true);
}
