{
  var o = t.def && t.def[e];
  if (o)
    try {
      o(n.elm, t, n, r, i);
    } catch (r) {
      k(r, n.context, "directive " + t.name + " " + e + " hook");
    }
}
