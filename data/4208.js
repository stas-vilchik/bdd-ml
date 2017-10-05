{
  it("runs assertions", function() {
    expect(1).toBe(1);
  });
  it("runs mocks", function() {
    var someMockFunction = mock.fn();
    expect(someMockFunction).not.toHaveBeenCalled();
    someMockFunction();
    expect(someMockFunction).toHaveBeenCalledTimes(1);
  });
  it("pretty formats a string", function() {
    expect(prettyFormat("obj")).toBe('"obj"');
  });
}
