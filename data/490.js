{
  it("returns a Cancel if cancellation has been requested", function() {
    var cancel;
    var token = new CancelToken(function(c) {
      cancel = c;
    });
    cancel("Operation has been canceled.");
    expect(token.reason).toEqual(jasmine.any(Cancel));
    expect(token.reason.message).toBe("Operation has been canceled.");
  });
  it("returns undefined if cancellation has not been requested", function() {
    var token = new CancelToken(function() {});
    expect(token.reason).toBeUndefined();
  });
}
