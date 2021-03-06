{
  describe("when key is implemented in a browser", () => {
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
  });
  describe("when key is not implemented in a browser", () => {
    describe("when event type is keypress", () => {
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
    });
    describe("when event type is keydown or keyup", () => {
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
    });
    describe("when event type is unknown", () => {
      it("returns an empty string", () => {
        var nativeEvent = new KeyboardEvent("keysmack");
        expect(getEventKey(nativeEvent)).toBe("");
      });
    });
  });
}
