{
  _inheritsLoose(A, _B);

  function A(track) {
    var _this;

    if (track !== undefined) _this = _B.call(this, track) || this;
    else _this = _B.call(this) || this;
    return _this;
  }

  return A;
}
