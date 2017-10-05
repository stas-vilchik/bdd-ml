{
  jestExpect.extend({
    toFailWithoutMessage(expected) {
      return {
        pass: false
      };
    }
  });
  expect(() =>
    jestExpect(true).toFailWithoutMessage()
  ).toThrowErrorMatchingSnapshot();
}
