{
  var e = {},
    n = t.$options;

  for (var r in n.propsData) e[r] = t[r];

  var i = n._parentListeners;

  for (var o in i) e[bi(o)] = i[o];

  return e;
}
