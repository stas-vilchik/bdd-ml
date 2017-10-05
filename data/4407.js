{
  [
    arrayContaining([]).asymmetricMatch("jest"),
    arrayContaining(["foo"]).asymmetricMatch(["foo"]),
    arrayContaining(["foo"]).asymmetricMatch(["foo", "bar"]),
    arrayContaining([]).asymmetricMatch({})
  ].forEach(test => {
    jestExpect(test).toEqual(true);
  });
}
