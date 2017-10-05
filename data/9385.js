{
  var e = this;
  (e._uid = So++),
    (e._isVue = !0),
    t && t._isComponent
      ? ye(e, t)
      : (e.$options = z(ge(e.constructor), t || {}, e)),
    (e._renderProxy = e),
    (e._self = e),
    $t(e),
    vt(e),
    me(e),
    Ot(e, "beforeCreate"),
    Wt(e),
    Pt(e),
    qt(e),
    Ot(e, "created"),
    e.$options.el && e.$mount(e.$options.el);
}
