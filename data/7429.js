{
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
}
