{
  it("returns 13", () => {
    var nativeEvent = new KeyboardEvent("keypress", {
      charCode: 0,
      keyCode: 13
    });
    expect(getEventCharCode(nativeEvent)).toBe(13);
  });
}
