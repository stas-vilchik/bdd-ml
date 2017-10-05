{
  const env1 = new NodeEnvironment({});
  expect(env1.global.process.on).not.toBe(null);
}
