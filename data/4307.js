{
  it("adds numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
  describe("failing tests", () => {
    it("fails the test", () => {
      expect(sum(1, 2)).toEqual(4);
    });
  });
}
