{
  expect(
    buildURL("/foo?foo=bar", {
      bar: "baz"
    })
  ).toEqual("/foo?foo=bar&bar=baz");
}
