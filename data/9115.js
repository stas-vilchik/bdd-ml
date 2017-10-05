{
  var e = this._computedWatchers && this._computedWatchers[t];
  if (e) return e.dirty && e.evaluate(), Qi.target && e.depend(), e.value;
}
