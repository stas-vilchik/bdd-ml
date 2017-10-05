{
  var nativeEvent = new KeyboardEvent("keypress", {
    charCode: 65
  });
  expect(getEventKey(nativeEvent)).toBe("A");
}
