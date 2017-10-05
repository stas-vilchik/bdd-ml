{
  expect(function() {
    new CancelToken(123);
  }).toThrowError(TypeError, "executor must be a function.");
}
