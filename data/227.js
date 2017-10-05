{
  ("use strict");

  e.exports = function(e) {
    return !(!e || !e.__CANCEL__);
  };
}
