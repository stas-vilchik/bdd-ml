{
  const result = runJest("auto-reset-mocks/with-auto-reset");
  expect(result.status).toBe(0);
}
