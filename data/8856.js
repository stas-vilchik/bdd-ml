{
  return options.every(function(o) {
    return !looseEqual(o, value);
  });
}
