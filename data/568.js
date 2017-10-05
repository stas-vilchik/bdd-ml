{
  expect(
    buildURL("/foo", {
      foo: {
        bar: "baz"
      }
    })
  ).toEqual("/foo?foo=" + encodeURI('{"bar":"baz"}'));
}
