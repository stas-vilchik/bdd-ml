{
  expect(this.equals).toBe(equals);
  return {
    pass: !!this.equals(1, 1)
  };
}
