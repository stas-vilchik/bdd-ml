{
  it("fails but will be skipped", () => {
    expect(true).toBe(false);
  });
  fit("will run", () => {
    return Promise.resolve();
  });
  fit("will run and fail", () => {
    return Promise.reject();
  });
}
