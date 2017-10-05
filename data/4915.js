{
  it("proxies matchers to expect", () => {
    expect(() => expect(1).toBe(2)).toThrowErrorMatchingSnapshot();
  });
}
