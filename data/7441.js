{
  getEventCharCode.mockReturnValue(9001);
  var keyboardEvent = createEvent({
    type: "keypress",
    charCode: 50
  });
  expect(keyboardEvent.which).toBe(9001);
}
