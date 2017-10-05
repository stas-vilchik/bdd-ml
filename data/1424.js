{
  var x = 5;
  console.log(x);

  for (var i = 0; i < 7; i++) {
    var qux = function qux(y) {
      var x = y;
      setTimeout(function() {
        return x;
      }, 0);
    };

    qux(i);
  }
}
