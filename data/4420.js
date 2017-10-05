{
  jestExpect(stringContaining("en*").asymmetricMatch("queen*")).toBe(true);
  jestExpect(stringContaining("en").asymmetricMatch("queue")).toBe(false);
}
