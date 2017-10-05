{
  flushing = true;
  var watcher, id;
  queue.sort(function(a, b) {
    return a.id - b.id;
  });

  for (index$1 = 0; index$1 < queue.length; index$1++) {
    watcher = queue[index$1];
    id = watcher.id;
    has[id] = null;
    watcher.run();

    if ("development" !== "production" && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          "You may have an infinite update loop " +
            (watcher.user
              ? 'in watcher with expression "' + watcher.expression + '"'
              : "in a component render function."),
          watcher.vm
        );
        break;
      }
    }
  }

  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState();
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  if (devtools && config.devtools) {
    devtools.emit("flush");
  }
}
