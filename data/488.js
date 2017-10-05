{
  expect(function() {
    new CancelToken();
  }).toThrowError(TypeError, "executor must be a function.");
}
