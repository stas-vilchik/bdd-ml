{
  return babelHelpers.asyncToGenerator(function*() {
    return yield baz(bar);
  })();
}
