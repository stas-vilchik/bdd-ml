{
  var handler = jsHandlers[task.method];
  var args = [].concat(task.args);

  if (typeof handler === "function") {
    args.unshift(id);
    results.push(handler.apply(void 0, args));
  }
}
