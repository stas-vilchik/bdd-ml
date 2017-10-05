{
  return n => [].slice.call(arguments).reduce((a, b) => a * b) * n;
}
