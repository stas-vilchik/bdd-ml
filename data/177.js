{
  ("use strict");

  var r = n(2);

  e.exports = function(e, t) {
    r.forEach(e, function(n, r) {
      r !== t &&
        r.toUpperCase() === t.toUpperCase() &&
        ((e[t] = n), delete e[r]);
    });
  };
}
