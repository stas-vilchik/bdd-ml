{
  if (!xa) return !1;
  if (this._hasMove) return this._hasMove;
  var n = t.cloneNode();
  t._transitionClasses &&
    t._transitionClasses.forEach(function(t) {
      In(n, t);
    }),
    Mn(n, e),
    (n.style.display = "none"),
    this.$el.appendChild(n);
  var r = Bn(n);
  return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
}
