{
  if (!Vo) return !1;
  if (this._hasMove) return this._hasMove;
  var n = t.cloneNode();
  t._transitionClasses &&
    t._transitionClasses.forEach(function(t) {
      pn(n, t);
    }),
    fn(n, e),
    (n.style.display = "none"),
    this.$el.appendChild(n);

  var r = _n(n);

  return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
}
