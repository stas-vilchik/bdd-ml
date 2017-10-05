{
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
