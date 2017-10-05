{
  return function() {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}
