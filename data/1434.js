{
  switch (i) {
    case 0:
      var _loop4 = function() {
        var z = 3;

        (function() {
          return z;
        });

        j++;
        return "break";
      };

      for (k = 0; k < 10; k++) {
        var _ret2 = _loop4();

        if (_ret2 === "break") break;
      }

      break;
  }

  var z = 3;

  (function() {
    return z;
  });
}
