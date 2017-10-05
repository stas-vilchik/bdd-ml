{
  process.env.NODE_ENV !== "production" && checkOptionType(vm, "computed");
  var watchers = (vm._computedWatchers = Object.create(null));

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === "function" ? userDef : userDef.get;

    if (process.env.NODE_ENV !== "production" && getter == null) {
      warn('Getter is missing for computed property "' + key + '".', vm);
    }

    watchers[key] = new Watcher(
      vm,
      getter || noop,
      noop,
      computedWatcherOptions
    );

    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== "production") {
      if (key in vm.$data) {
        warn(
          'The computed property "' + key + '" is already defined in data.',
          vm
        );
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(
          'The computed property "' + key + '" is already defined as a prop.',
          vm
        );
      }
    }
  }
}
