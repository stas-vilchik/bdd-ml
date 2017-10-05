{
  it("returns 0", () => {
    var nativeEvent = {
      keyCode: 31
    };
    expect(getEventCharCode(nativeEvent)).toBe(0);
  });
}
