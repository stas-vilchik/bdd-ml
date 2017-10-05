{
  it("patches jasmine in setup file", () => {
    expect(global.describeDefined).toBe(true);
  });
}
