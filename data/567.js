{
  expect(
    buildURL("/foo", {
      foo: "bar"
    })
  ).toEqual("/foo?foo=bar");
}
