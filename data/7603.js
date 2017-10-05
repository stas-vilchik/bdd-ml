{
  var log = [];

  var PoolableClassWithDestructor = function() {};

  PoolableClassWithDestructor.prototype.destructor = function() {
    log.push("released");
  };

  PooledClass.addPoolingTo(PoolableClassWithDestructor);
  var instance = PoolableClassWithDestructor.getPooled();
  PoolableClassWithDestructor.release(instance);
  expect(log).toEqual(["released"]);
}
