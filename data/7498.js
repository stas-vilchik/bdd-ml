{
  var nativeEvent = {
    keyCode: 31
  };
  expect(getEventCharCode(nativeEvent)).toBe(0);
}
