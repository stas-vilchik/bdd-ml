{
  function h() {
    return _h.apply(this, arguments);
  }

  h.toString = function() {
    return _h.toString();
  };

  return h;
}
