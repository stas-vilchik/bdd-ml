{
  var e = {},
    n = t.$options;

  for (var r in n.propsData) e[r] = t[r];

  var o = n._parentListeners;

  for (var i in o) e[qn(i)] = o[i];

  return e;
}
