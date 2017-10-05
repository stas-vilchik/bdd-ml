{
  var x = 5;
  console.log(x);
  {
    var _x = 7;
    setTimeout(function() {
      return _x;
    }, 0);
  }
}
