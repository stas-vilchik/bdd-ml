{
  jestExpect.assertions(3);
  jestExpect("a").not.toBe("b");
  jestExpect("a").toBe("a");
  jestExpect.assertions(2);
}
