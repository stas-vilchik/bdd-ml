{
  var log = [];

  var PoolableClassWithMultiArguments = function(a, b) {
    log.push(a, b);
  };

  PoolableClassWithMultiArguments.prototype.destructor = function() {};

  PooledClass.addPoolingTo(
    PoolableClassWithMultiArguments,
    PooledClass.twoArgumentPooler
  );
  PoolableClassWithMultiArguments.getPooled("a", "b", "c");
  expect(log).toEqual(["a", "b"]);
}
