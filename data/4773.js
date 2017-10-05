{
  const env1 = new NodeEnvironment({});
  expect(env1.global.global).toBe(env1.global);
}
