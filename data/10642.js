{
  t.prototype._init = function(t) {
    var e = this;
    (e._uid = to++),
      (e._isVue = !0),
      t && t._isComponent
        ? ye(e, t)
        : (e.$options = z(_e(e.constructor), t || {}, e)),
      (e._renderProxy = e),
      (e._self = e),
      Ct(e),
      vt(e),
      me(e),
      Ot(e, "beforeCreate"),
      Gt(e),
      Nt(e),
      Kt(e),
      Ot(e, "created"),
      e.$options.el && e.$mount(e.$options.el);
  };
}
