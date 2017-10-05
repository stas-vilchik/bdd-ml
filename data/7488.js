{
  var nativeEvent = new KeyboardEvent("keypress", {
    charCode: 13
  });
  expect(getEventCharCode(nativeEvent)).toBe(13);
}
