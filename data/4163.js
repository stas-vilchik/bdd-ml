{
  const result = runJest("timer-resetMocks/with_resetMocks");
  expect(result.status).toBe(0);
}
