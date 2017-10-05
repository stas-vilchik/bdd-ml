{
  it("returns an empty string", () => {
    var nativeEvent = new KeyboardEvent("keysmack");
    expect(getEventKey(nativeEvent)).toBe("");
  });
}
