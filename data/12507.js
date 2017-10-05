{
  var instance = instances[id];

  if (instance && Array.isArray(tasks)) {
    var results = [];
    tasks.forEach(function(task) {
      var handler = jsHandlers[task.method];
      var args = [].concat(task.args);

      if (typeof handler === "function") {
        args.unshift(id);
        results.push(handler.apply(void 0, args));
      }
    });
    return results;
  }

  return new Error('invalid instance id "' + id + '" or tasks');
}
