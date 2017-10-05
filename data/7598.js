{
  PooledClass = require("PooledClass");

  PoolableClass = function() {};

  PoolableClass.prototype.destructor = function() {};

  PooledClass.addPoolingTo(PoolableClass);
}
