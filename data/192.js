{
  ("use strict");

  e.exports = function(e, t, n, r, o) {
    return (
      (e.config = t), n && (e.code = n), (e.request = r), (e.response = o), e
    );
  };
}
