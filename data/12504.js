{
  var args = [],
    len = arguments.length - 1;

  while (len-- > 0) args[len] = arguments[len + 1];

  return callback.apply(void 0, [instances[id]].concat(args));
}
