{
  var nativeEvent = new KeyboardEvent("keysmack");
  expect(getEventKey(nativeEvent)).toBe("");
}
