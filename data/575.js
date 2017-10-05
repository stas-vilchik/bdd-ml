{
  expect(buildURL("/foo", new URLSearchParams("bar=baz"))).toEqual(
    "/foo?bar=baz"
  );
}
