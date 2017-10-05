{
  var ImmortalClass = function() {};

  PooledClass.addPoolingTo(ImmortalClass);
  var inst = ImmortalClass.getPooled();
  expect(function() {
    ImmortalClass.release(inst);
  }).toThrow();
}
