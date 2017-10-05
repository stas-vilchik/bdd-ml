{
  var token = new CancelToken(function() {});
  expect(token.reason).toBeUndefined();
}
