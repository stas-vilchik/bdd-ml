{
  var inner = () => arguments;

  var another = function() {
    var inner2 = () => arguments;
  };

  return [].slice.call(inner());
}
