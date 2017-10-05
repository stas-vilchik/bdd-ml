{
  for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];

  var i,
    o = e.apply(this, n),
    a = this.__ob__;

  switch (t) {
    case "push":
    case "unshift":
      i = n;
      break;

    case "splice":
      i = n.slice(2);
  }

  return i && a.observeArray(i), a.dep.notify(), o;
}
