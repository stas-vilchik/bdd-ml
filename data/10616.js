{
  var e = kr[t];
  $(Or, t, function() {
    for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];

    var o,
      i = e.apply(this, n),
      a = this.__ob__;

    switch (t) {
      case "push":
      case "unshift":
        o = n;
        break;

      case "splice":
        o = n.slice(2);
    }

    return o && a.observeArray(o), a.dep.notify(), i;
  });
}
