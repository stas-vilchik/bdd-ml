{
  var RandomClass = function() {};

  RandomClass.prototype.destructor = function() {};

  PooledClass.addPoolingTo(RandomClass);
  var randomInstance = RandomClass.getPooled();
  PoolableClass.getPooled();
  expect(function() {
    PoolableClass.release(randomInstance);
  }).toThrowError(
    "Trying to release an instance into a pool of a different type."
  );
}
