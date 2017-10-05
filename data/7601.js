{
  var instance = PoolableClass.getPooled();
  PoolableClass.release(instance);
  expect(PoolableClass.instancePool.length).toBe(1);
  expect(PoolableClass.instancePool[0]).toBe(instance);
}
