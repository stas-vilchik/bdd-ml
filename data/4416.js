{
  const definedPropertyObject = {};
  Object.defineProperty(definedPropertyObject, "foo", {
    get: () => "bar"
  });
  jestExpect(
    objectContaining({
      foo: "bar"
    }).asymmetricMatch(definedPropertyObject)
  ).toBe(true);
}
