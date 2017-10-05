{
  var keyboardEvent = createEvent({
    type: "keyup",
    keyCode: 40
  });
  expect(keyboardEvent.keyCode).toBe(40);
}
