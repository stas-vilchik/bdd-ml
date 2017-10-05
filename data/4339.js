{
  it("has predefined global variable", () => {
    expect(global.definedInSetupFile).toEqual(true);
  });
}
