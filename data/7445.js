{
  var keyboardEvent = createEvent({
    type: "keysmack",
    keyCode: 40
  });
  expect(keyboardEvent.which).toBe(0);
}
