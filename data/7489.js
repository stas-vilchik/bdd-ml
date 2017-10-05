{
  it("returns 0", () => {
    var nativeEvent = new KeyboardEvent("keypress", {
      charCode: 31
    });
    expect(getEventCharCode(nativeEvent)).toBe(0);
  });
}
