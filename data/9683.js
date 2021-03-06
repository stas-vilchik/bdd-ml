{
  var watcher = this._computedWatchers && this._computedWatchers[key];

  if (watcher) {
    if (watcher.dirty) {
      watcher.evaluate();
    }

    if (Dep.target) {
      watcher.depend();
    }

    return watcher.value;
  }
}
