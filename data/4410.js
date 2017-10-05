{
  jestExpect(() => {
    arrayContaining("foo").asymmetricMatch([]);
  }).toThrow();
}
