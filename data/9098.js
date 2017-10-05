{
  var n = t.$options[e];
  if (n)
    for (var r = 0, i = n.length; r < i; r++)
      try {
        n[r].call(t);
      } catch (n) {
        k(n, t, e + " hook");
      }
  t._hasHookEvent && t.$emit("hook:" + e);
}
