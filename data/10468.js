{
  var e = this._computedWatchers && this._computedWatchers[t];
  if (e) return e.dirty && e.evaluate(), $r.target && e.depend(), e.value;
}
