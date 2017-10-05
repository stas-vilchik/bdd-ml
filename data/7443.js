{
  var keyboardEvent = createEvent({
    type: "keyup",
    keyCode: 40
  });
  expect(keyboardEvent.which).toBe(40);
}
