{
  ("use strict");

  e.exports = function(e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
  };
}
