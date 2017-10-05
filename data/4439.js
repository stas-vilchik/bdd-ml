{
  expect.assertions(3);
  jestExpect.extend({
    toBeOne() {
      expect(this.equals).toBe(equals);
      return {
        pass: !!this.equals(1, 1)
      };
    }
  });
  expect(() => jestExpect().toBeOne()).not.toThrow();
}
