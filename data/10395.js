{
  if (Array.isArray(t) && c(e)) t.splice(e, 1);
  else {
    var n = t.__ob__;
    t._isVue ||
      (n && n.vmCount) ||
      (d(t, e) && (delete t[e], n && n.dep.notify()));
  }
}
