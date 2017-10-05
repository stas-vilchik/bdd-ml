{
  describe("when keyCode is 13", () => {
    it("returns 13", () => {
      var nativeEvent = {
        keyCode: 13
      };
      expect(getEventCharCode(nativeEvent)).toBe(13);
    });
  });
  describe("when keyCode is not 13", () => {
    it("returns 0", () => {
      var nativeEvent = {
        keyCode: 31
      };
      expect(getEventCharCode(nativeEvent)).toBe(0);
    });
  });
}
