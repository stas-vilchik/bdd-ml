{
  ("use strict");

  e.exports = function(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
  };
}
