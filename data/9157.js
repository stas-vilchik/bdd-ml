{
  t.cid = 0;
  var e = 1;

  t.extend = function(t) {
    t = t || {};
    var n = this,
      r = n.cid,
      i = t._Ctor || (t._Ctor = {});
    if (i[r]) return i[r];

    var o = t.name || n.options.name,
      a = function(t) {
        this._init(t);
      };

    return (
      (a.prototype = Object.create(n.prototype)),
      (a.prototype.constructor = a),
      (a.cid = e++),
      (a.options = z(n.options, t)),
      (a.super = n),
      a.options.props && Ae(a),
      a.options.computed && ke(a),
      (a.extend = n.extend),
      (a.mixin = n.mixin),
      (a.use = n.use),
      Oi.forEach(function(t) {
        a[t] = n[t];
      }),
      o && (a.options.components[o] = a),
      (a.superOptions = n.options),
      (a.extendOptions = t),
      (a.sealedOptions = y({}, a.options)),
      (i[r] = a),
      a
    );
  };
}
