{
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
}
