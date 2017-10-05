{
  var cancel;
  var token = new CancelToken(function(c) {
    cancel = c;
  });
  cancel("Operation has been canceled.");
  expect(token.reason).toEqual(jasmine.any(Cancel));
  expect(token.reason.message).toBe("Operation has been canceled.");
}
