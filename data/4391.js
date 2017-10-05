{
  jestExpect.assertions(2);
  jestExpect("a").not.toBe("b");
  jestExpect("a").toBe("a");
}
