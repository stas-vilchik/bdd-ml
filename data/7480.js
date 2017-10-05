{
  describe("when charCode is 0 and keyCode is 13", () => {
    it("returns 13", () => {
      var nativeEvent = new KeyboardEvent("keypress", {
        charCode: 0,
        keyCode: 13
      });
      expect(getEventCharCode(nativeEvent)).toBe(13);
    });
  });
  describe("when charCode is not 0 and/or keyCode is not 13", () => {
    describe("when charCode is 32 or bigger", () => {
      it("returns charCode", () => {
        var nativeEvent = new KeyboardEvent("keypress", {
          charCode: 32
        });
        expect(getEventCharCode(nativeEvent)).toBe(32);
      });
    });
    describe("when charCode is smaller than 32", () => {
      describe("when charCode is 13", () => {
        it("returns 13", () => {
          var nativeEvent = new KeyboardEvent("keypress", {
            charCode: 13
          });
          expect(getEventCharCode(nativeEvent)).toBe(13);
        });
      });
      describe("when charCode is not 13", () => {
        it("returns 0", () => {
          var nativeEvent = new KeyboardEvent("keypress", {
            charCode: 31
          });
          expect(getEventCharCode(nativeEvent)).toBe(0);
        });
      });
    });
  });
}
