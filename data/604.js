{
  var parsed = parseHeaders(
    "Age: age-a\n" + "Age: age-b\n" + "Foo: foo-a\n" + "Foo: foo-b\n"
  );
  expect(parsed["age"]).toEqual("age-a");
  expect(parsed["foo"]).toEqual("foo-a, foo-b");
}
