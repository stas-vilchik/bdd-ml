{
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
}
