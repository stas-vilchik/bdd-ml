{
  it("returns whatever getEventCharCode returns", () => {
    getEventCharCode.mockReturnValue(100500);
    var keyboardEvent = createEvent({
      type: "keypress",
      charCode: 50
    });
    expect(keyboardEvent.charCode).toBe(100500);
  });
}
