{
  it("returns 0", () => {
    var keyboardEvent = createEvent({
      type: "keypress",
      charCode: 40
    });
    expect(keyboardEvent.keyCode).toBe(0);
  });
}
