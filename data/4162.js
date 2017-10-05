{
  const result = runJest("timer-resetMocks/after_resetAllMocks");
  expect(result.status).toBe(0);
}
