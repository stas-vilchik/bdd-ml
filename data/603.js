{
  var parsedZero = parseHeaders("");
  var parsedSingle = parseHeaders("Set-Cookie: key=val;");
  var parsedMulti = parseHeaders(
    "Set-Cookie: key=val;\n" + "Set-Cookie: key2=val2;\n"
  );
  expect(parsedZero["set-cookie"]).toBeUndefined();
  expect(parsedSingle["set-cookie"]).toEqual(["key=val;"]);
  expect(parsedMulti["set-cookie"]).toEqual(["key=val;", "key2=val2;"]);
}
