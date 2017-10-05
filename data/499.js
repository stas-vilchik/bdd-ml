{
  it("returns an object containing token and cancel function", function() {
    var source = CancelToken.source();
    expect(source.token).toEqual(jasmine.any(CancelToken));
    expect(source.cancel).toEqual(jasmine.any(Function));
    expect(source.token.reason).toBeUndefined();
    source.cancel("Operation has been canceled.");
    expect(source.token.reason).toEqual(jasmine.any(Cancel));
    expect(source.token.reason.message).toBe("Operation has been canceled.");
  });
}
