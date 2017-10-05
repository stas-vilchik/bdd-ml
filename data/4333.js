{
  expect(true).toBe(true);
  setImmediate(() => {
    throw new Error("Scheduled Error");
  });
}
