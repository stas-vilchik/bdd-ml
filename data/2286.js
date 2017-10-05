{
  (function (e) {
    throw e;
  })(new Error((yield 'test')));
}