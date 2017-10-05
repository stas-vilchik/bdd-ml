{
  ("use strict");

  var r = n(2);

  e.exports = function(e, t, n) {
    return (
      r.forEach(n, function(n) {
        e = n(e, t);
      }),
      e
    );
  };
}
