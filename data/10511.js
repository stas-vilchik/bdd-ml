{
  t = t || {};
  var n = this,
    r = n.cid,
    o = t._Ctor || (t._Ctor = {});
  if (o[r]) return o[r];

  var i = t.name || n.options.name,
    a = function(t) {
      this._init(t);
    };

  return (
    (a.prototype = Object.create(n.prototype)),
    (a.prototype.constructor = a),
    (a.cid = e++),
    (a.options = z(n.options, t)),
    (a.super = n),
    a.options.props && xe(a),
    a.options.computed && ke(a),
    (a.extend = n.extend),
    (a.mixin = n.mixin),
    (a.use = n.use),
    Yn.forEach(function(t) {
      a[t] = n[t];
    }),
    i && (a.options.components[i] = a),
    (a.superOptions = n.options),
    (a.extendOptions = t),
    (a.sealedOptions = y({}, a.options)),
    (o[r] = a),
    a
  );
}
