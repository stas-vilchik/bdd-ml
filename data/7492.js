{
  it("returns keyCode", () => {
    var nativeEvent = {
      keyCode: 32
    };
    expect(getEventCharCode(nativeEvent)).toBe(32);
  });
}
