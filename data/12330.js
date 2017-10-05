{
  if (process.env.NODE_ENV !== "production") {
    defineReactive$$1(vm, key, result[key], function() {
      warn(
        "Avoid mutating an injected value directly since the changes will be " +
          "overwritten whenever the provided component re-renders. " +
          'injection being mutated: "' +
          key +
          '"',
        vm
      );
    });
  } else {
    defineReactive$$1(vm, key, result[key]);
  }
}
