{
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function(key) {
      {
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
      }
    });
    observerState.shouldConvert = true;
  }
}
