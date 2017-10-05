{
  describe("when keyCode is recognized", () => {
    it("returns a translated key", () => {
      var nativeEvent = new KeyboardEvent("keydown", {
        keyCode: 45
      });
      expect(getEventKey(nativeEvent)).toBe("Insert");
    });
  });
  describe("when keyCode is not recognized", () => {
    it("returns Unidentified", () => {
      var nativeEvent = new KeyboardEvent("keydown", {
        keyCode: 1337
      });
      expect(getEventKey(nativeEvent)).toBe("Unidentified");
    });
  });
}
