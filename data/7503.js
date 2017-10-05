{
  it("returns a key", () => {
    var nativeEvent = new KeyboardEvent("keypress", {
      key: "f"
    });
    expect(getEventKey(nativeEvent)).toBe("f");
  });
}
