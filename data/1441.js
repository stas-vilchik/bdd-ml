{
  function B() {}

  var _proto = B.prototype;

  _proto.b = function b() {
    console.log("b");
  };

  return B;
}
