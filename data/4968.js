{
  const fn = moduleMocker.fn();
  expect(fn.mock.instances).toEqual([]);
  const instance1 = new fn();
  expect(fn.mock.instances[0]).toBe(instance1);
  const instance2 = new fn();
  expect(fn.mock.instances[1]).toBe(instance2);
}
