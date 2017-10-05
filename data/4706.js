{
  it("check process", () => {
    if (Symbol && Symbol.toStringTag) {
      expect(Object.prototype.toString.call(global.process)).toBe(
        "[object process]"
      );
    }
  });
}
