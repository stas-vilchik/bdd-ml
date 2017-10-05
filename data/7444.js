{
  it("returns 0", () => {
    var keyboardEvent = createEvent({
      type: "keysmack",
      keyCode: 40
    });
    expect(keyboardEvent.which).toBe(0);
  });
}
