{
  it("returns the function `name` property", () => {
    function x() {}

    const metadata = moduleMocker.getMetadata(x);
    expect(x.name).toBe("x");
    expect(metadata.name).toBe("x");
  });
  it("mocks constant values", () => {
    const metadata = moduleMocker.getMetadata(Symbol.for("bowties.are.cool"));
    expect(metadata.value).toEqual(Symbol.for("bowties.are.cool"));
    expect(moduleMocker.getMetadata("banana").value).toEqual("banana");
    expect(moduleMocker.getMetadata(27).value).toEqual(27);
    expect(moduleMocker.getMetadata(false).value).toEqual(false);
  });
  it("does not retrieve metadata for arrays", () => {
    const array = [1, 2, 3];
    const metadata = moduleMocker.getMetadata(array);
    expect(metadata.value).toBeUndefined();
    expect(metadata.members).toBeUndefined();
    expect(metadata.type).toEqual("array");
  });
  it("does not retrieve metadata for undefined", () => {
    const metadata = moduleMocker.getMetadata(undefined);
    expect(metadata.value).toBeUndefined();
    expect(metadata.members).toBeUndefined();
    expect(metadata.type).toEqual("undefined");
  });
  it("does not retrieve metadata for null", () => {
    const metadata = moduleMocker.getMetadata(null);
    expect(metadata.value).toBeNull();
    expect(metadata.members).toBeUndefined();
    expect(metadata.type).toEqual("null");
  });
}
