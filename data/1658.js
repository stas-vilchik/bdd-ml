{
  function setInterval(_x, _x2) {
    return _setInterval.apply(this, arguments);
  }

  setInterval.toString = function() {
    return _setInterval.toString();
  };

  return setInterval;
}
