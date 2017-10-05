{
  jestExpect(() => {
    jestExpect.hasAssertions(2);
  }).toThrow(/does not accept any arguments/);
}
