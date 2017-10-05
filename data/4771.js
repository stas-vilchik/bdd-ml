{
  const env1 = new NodeEnvironment({});
  const env2 = new NodeEnvironment({});
  expect(env1.global.process).not.toBe(env2.global.process);
}
