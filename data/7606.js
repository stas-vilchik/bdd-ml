{
  var log = [];

  var PoolableClassWithOneArgument = function(a) {
    log.push(a);
  };

  PoolableClassWithOneArgument.prototype.destructor = function() {};

  PooledClass.addPoolingTo(PoolableClassWithOneArgument);
  var instance = PoolableClassWithOneArgument.getPooled("new");
  PoolableClassWithOneArgument.release(instance);
  PoolableClassWithOneArgument.getPooled("old");
  expect(log).toEqual(["new", "old"]);
}
