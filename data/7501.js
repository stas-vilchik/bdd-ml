{
  it("returns a normalized value", () => {
    var nativeEvent = new KeyboardEvent("keypress", {
      key: "Del"
    });
    expect(getEventKey(nativeEvent)).toBe("Delete");
  });
}
