{
  describe("when charCode is 13", () => {
    it("returns 'Enter'", () => {
      var nativeEvent = new KeyboardEvent("keypress", {
        charCode: 13
      });
      expect(getEventKey(nativeEvent)).toBe("Enter");
    });
  });
  describe("when charCode is not 13", () => {
    it("returns a string from a charCode", () => {
      var nativeEvent = new KeyboardEvent("keypress", {
        charCode: 65
      });
      expect(getEventKey(nativeEvent)).toBe("A");
    });
  });
}
