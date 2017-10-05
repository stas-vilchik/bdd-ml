{
  var args = [],
    len = arguments.length;

  while (len--) args[len] = arguments[len];

  return instance.document.taskCenter.send(
    "module",
    {
      module: name,
      method: methodName
    },
    args
  );
}
