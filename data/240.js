{
  ("use strict");

  e.exports = function(e) {
    return function(t) {
      return e.apply(null, t);
    };
  };
}
