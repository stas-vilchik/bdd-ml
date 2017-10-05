{
  jestExpect(() => {
    stringMatching([1]).asymmetricMatch("queen");
  }).toThrow();
}
