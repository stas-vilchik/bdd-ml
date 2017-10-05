{
  describe("when charCode is present in nativeEvent", () => {
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
  });
  describe("when charCode is not present in nativeEvent", () => {
    describe("when keyCode is 32 or bigger", () => {
      it("returns keyCode", () => {
        var nativeEvent = {
          keyCode: 32
        };
        expect(getEventCharCode(nativeEvent)).toBe(32);
      });
    });
    describe("when keyCode is smaller than 32", () => {
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
    });
  });
}
