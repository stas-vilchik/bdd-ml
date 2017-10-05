{
  describe("charCode", () => {
    describe("when event is `keypress`", () => {
      it("returns whatever getEventCharCode returns", () => {
        getEventCharCode.mockReturnValue(100500);
        var keyboardEvent = createEvent({
          type: "keypress",
          charCode: 50
        });
        expect(keyboardEvent.charCode).toBe(100500);
      });
    });
    describe("when event is not `keypress`", () => {
      it("returns 0", () => {
        var keyboardEvent = createEvent({
          type: "keyup",
          charCode: 50
        });
        expect(keyboardEvent.charCode).toBe(0);
      });
    });
  });
  describe("keyCode", () => {
    describe("when event is `keydown` or `keyup`", () => {
      it("returns a passed keyCode", () => {
        var keyboardEvent = createEvent({
          type: "keyup",
          keyCode: 40
        });
        expect(keyboardEvent.keyCode).toBe(40);
      });
    });
    describe("when event is `keypress`", () => {
      it("returns 0", () => {
        var keyboardEvent = createEvent({
          type: "keypress",
          charCode: 40
        });
        expect(keyboardEvent.keyCode).toBe(0);
      });
    });
  });
  describe("which", () => {
    describe("when event is `keypress`", () => {
      it("returns whatever getEventCharCode returns", () => {
        getEventCharCode.mockReturnValue(9001);
        var keyboardEvent = createEvent({
          type: "keypress",
          charCode: 50
        });
        expect(keyboardEvent.which).toBe(9001);
      });
    });
    describe("when event is `keydown` or `keyup`", () => {
      it("returns a passed keyCode", () => {
        var keyboardEvent = createEvent({
          type: "keyup",
          keyCode: 40
        });
        expect(keyboardEvent.which).toBe(40);
      });
    });
    describe("when event type is unknown", () => {
      it("returns 0", () => {
        var keyboardEvent = createEvent({
          type: "keysmack",
          keyCode: 40
        });
        expect(keyboardEvent.which).toBe(0);
      });
    });
  });
}
