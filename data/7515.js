{
  var nativeEvent = new KeyboardEvent("keydown", {
    keyCode: 1337
  });
  expect(getEventKey(nativeEvent)).toBe("Unidentified");
}
