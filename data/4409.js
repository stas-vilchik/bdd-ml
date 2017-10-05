{
  jestExpect(arrayContaining(["foo"]).asymmetricMatch(["bar"])).toBe(false);
}
