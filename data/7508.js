{
  var nativeEvent = new KeyboardEvent("keypress", {
    charCode: 13
  });
  expect(getEventKey(nativeEvent)).toBe("Enter");
}
