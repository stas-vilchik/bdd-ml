{
  [
    anything().asymmetricMatch(null),
    anything().asymmetricMatch(undefined)
  ].forEach(test => {
    jestExpect(test).toBe(false);
  });
}
