{
  var x = 5;
  console.log(x);

  for (var i = 0; i < 7; i++) {
    {
      (function() {
        var x = i;
        setTimeout(function() {
          return x;
        }, 0);
      })();
    }
  }
}
