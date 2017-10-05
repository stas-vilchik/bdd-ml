{
  var nativeEvent = {
    keyCode: 13
  };
  expect(getEventCharCode(nativeEvent)).toBe(13);
}
