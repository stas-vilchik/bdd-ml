{
  var str = "";

  for (var i = 0; i < 100000; i++) {
    str += "This will be repeated to be very large indeed. ";
  }

  expect(adler32(str)).toBe(692898118);
}
