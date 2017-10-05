{
  describe("when key is not normalized", () => {
    it("returns a normalized value", () => {
      var nativeEvent = new KeyboardEvent("keypress", {
        key: "Del"
      });
      expect(getEventKey(nativeEvent)).toBe("Delete");
    });
  });
  describe("when key is normalized", () => {
    it("returns a key", () => {
      var nativeEvent = new KeyboardEvent("keypress", {
        key: "f"
      });
      expect(getEventKey(nativeEvent)).toBe("f");
    });
  });
}
