{
  it("throws when executor is not specified", function() {
    expect(function() {
      new CancelToken();
    }).toThrowError(TypeError, "executor must be a function.");
  });
  it("throws when executor is not a function", function() {
    expect(function() {
      new CancelToken(123);
    }).toThrowError(TypeError, "executor must be a function.");
  });
}
