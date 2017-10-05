{
  it("returns a Promise that resolves when cancellation is requested", function(
    done
  ) {
    var cancel;
    var token = new CancelToken(function(c) {
      cancel = c;
    });
    token.promise.then(function onFulfilled(value) {
      expect(value).toEqual(jasmine.any(Cancel));
      expect(value.message).toBe("Operation has been canceled.");
      done();
    });
    cancel("Operation has been canceled.");
  });
}
