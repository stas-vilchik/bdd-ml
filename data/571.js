{
  expect(
    buildURL("/foo", {
      foo: "@:$, "
    })
  ).toEqual("/foo?foo=@:$,+");
}
