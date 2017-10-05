{
  var capturedThis = this;
  return function(x) {
    return x == capturedThis.element;
  };
}
