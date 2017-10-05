{
  var propsData = vm.$options.propsData || {};
  var props = (vm._props = {});
  var keys = (vm.$options._propKeys = []);
  var isRoot = !vm.$parent;
  observerState.shouldConvert = isRoot;

  var loop = function(key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          '"' +
            key +
            '" is a reserved attribute and cannot be used as component prop.',
          vm
        );
      }

      defineReactive$$1(props, key, value, function() {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              'value. Prop being mutated: "' +
              key +
              '"',
            vm
          );
        }
      });
    }

    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);

  observerState.shouldConvert = true;
}
