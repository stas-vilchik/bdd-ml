{
  var nativeEvent = new KeyboardEvent("keydown", {
    keyCode: 45
  });
  expect(getEventKey(nativeEvent)).toBe("Insert");
}
