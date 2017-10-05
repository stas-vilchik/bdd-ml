{
  it("returns input when invoked", () => {
    expect(fakeChalk.red("yo")).toEqual("yo");
  });
  it("supports chaining", () => {
    expect(fakeChalk.red.blue("yo")).toEqual("yo");
  });
}
