{
  jestExpect(() => {
    stringContaining([1]).asymmetricMatch("queen");
  }).toThrow();
}
