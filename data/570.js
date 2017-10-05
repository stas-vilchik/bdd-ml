{
  expect(
    buildURL("/foo", {
      foo: ["bar", "baz"]
    })
  ).toEqual("/foo?foo[]=bar&foo[]=baz");
}
