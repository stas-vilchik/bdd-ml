{
  it("returns 0", () => {
    var keyboardEvent = createEvent({
      type: "keyup",
      charCode: 50
    });
    expect(keyboardEvent.charCode).toBe(0);
  });
}
