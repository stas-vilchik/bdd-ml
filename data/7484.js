{
  it("returns charCode", () => {
    var nativeEvent = new KeyboardEvent("keypress", {
      charCode: 32
    });
    expect(getEventCharCode(nativeEvent)).toBe(32);
  });
}
