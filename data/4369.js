{
  it("fails", () => {
    throw new Error("this is unexpected.");
  });
  it("fails strings", () => {
    throw "this is a string.";
  });
  it("tests", () => {
    jest.unmock("this-module-does-not-exist");
  });
}
