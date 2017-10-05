{
  return _coroutine(function*() {
    var wat = yield bar();
  })();
}
