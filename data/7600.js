{
  var instance = PoolableClass.getPooled();
  expect(instance instanceof PoolableClass).toBe(true);
}
