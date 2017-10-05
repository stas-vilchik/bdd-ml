{
  var e = t.$options,
    n = e.parent;

  if (n && !e.abstract) {
    for (; n.$options.abstract && n.$parent; ) n = n.$parent;

    n.$children.push(t);
  }

  (t.$parent = n),
    (t.$root = n ? n.$root : t),
    (t.$children = []),
    (t.$refs = {}),
    (t._watcher = null),
    (t._inactive = null),
    (t._directInactive = !1),
    (t._isMounted = !1),
    (t._isDestroyed = !1),
    (t._isBeingDestroyed = !1);
}
