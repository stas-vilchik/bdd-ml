{
  var e = this._installedPlugins || (this._installedPlugins = []);
  if (e.indexOf(t) > -1) return this;
  var n = m(arguments, 1);
  return (
    n.unshift(this),
    "function" == typeof t.install
      ? t.install.apply(t, n)
      : "function" == typeof t && t.apply(null, n),
    e.push(t),
    this
  );
}
