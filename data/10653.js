{
  var n = this;
  n._isMounted && Ot(n, "beforeUpdate");
  var r = n.$el,
    o = n._vnode,
    i = Fr;
  (Fr = n),
    (n._vnode = t),
    o
      ? (n.$el = n.__patch__(o, t))
      : ((n.$el = n.__patch__(
          n.$el,
          t,
          e,
          !1,
          n.$options._parentElm,
          n.$options._refElm
        )),
        (n.$options._parentElm = n.$options._refElm = null)),
    (Fr = i),
    r && (r.__vue__ = null),
    n.$el && (n.$el.__vue__ = n),
    n.$vnode &&
      n.$parent &&
      n.$vnode === n.$parent._vnode &&
      (n.$parent.$el = n.$el);
}
