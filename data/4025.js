{
  const result = runJest("auto-clear-mocks/without-auto-clear");
  expect(result.status).toBe(0);
}
