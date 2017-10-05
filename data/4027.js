{
  const result = runJest("auto-reset-mocks/without-auto-reset");
  expect(result.status).toBe(0);
}
