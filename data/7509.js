{
  it("returns a string from a charCode", () => {
    var nativeEvent = new KeyboardEvent("keypress", {
      charCode: 65
    });
    expect(getEventKey(nativeEvent)).toBe("A");
  });
}
