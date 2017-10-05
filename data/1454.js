{
  var _this;

  _this = _Foo.call(this) || this;

  _Foo.prototype.test.whatever();

  _Foo.prototype.test.call(_this);

  return _this;
}
