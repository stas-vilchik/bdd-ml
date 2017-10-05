{
  expect(() => jestExpect("foo", "bar")).toThrow(
    new Error("Expect takes at most one argument.")
  );
}
