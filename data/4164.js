{
  const result = runJest("timer_use_real_timers");
  expect(result.stdout).toMatch("API is not mocked with fake timers.");
  expect(result.status).toBe(0);
}
