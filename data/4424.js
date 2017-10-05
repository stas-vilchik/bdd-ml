{
  jestExpect(stringMatching("en").asymmetricMatch("queen")).toBe(true);
  jestExpect(stringMatching("en").asymmetricMatch("queue")).toBe(false);
}
