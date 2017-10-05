{
  var instance = PoolableClass.getPooled();
  PoolableClass.release(instance);
  var instance2 = PoolableClass.getPooled();
  expect(instance).toBe(instance2);
}
