{
  var vm = this;

  if (isPlainObject(cb)) {
    return createWatcher(vm, expOrFn, cb, options);
  }

  options = options || {};
  options.user = true;
  var watcher = new Watcher(vm, expOrFn, cb, options);

  if (options.immediate) {
    cb.call(vm, watcher.value);
  }

  return function unwatchFn() {
    watcher.teardown();
  };
}
