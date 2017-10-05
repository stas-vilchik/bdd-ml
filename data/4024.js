{
  const result = runJest("auto-clear-mocks/with-auto-clear");
  expect(result.status).toBe(0);
}
