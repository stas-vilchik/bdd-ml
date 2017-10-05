{
  var error = new Error("Boom!");
  expect(
    enhanceError(
      error,
      {
        foo: "bar"
      },
      "ESOMETHING"
    )
  ).toBe(error);
}
