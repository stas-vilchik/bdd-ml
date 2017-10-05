{
  jestExpect(() => objectContaining(1337).asymmetricMatch()).toThrow();
}
