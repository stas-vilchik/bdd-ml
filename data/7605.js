{
  var log = [];

  var PoolableClassWithOneArgument = function(a) {
    log.push(a);
  };

  PoolableClassWithOneArgument.prototype.destructor = function() {};

  PooledClass.addPoolingTo(PoolableClassWithOneArgument);
  PoolableClassWithOneArgument.getPooled("new");
  expect(log).toEqual(["new"]);
}
