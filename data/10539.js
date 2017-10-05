{
  var i = t.def && t.def[e];
  if (i)
    try {
      i(n.elm, t, n, r, o);
    } catch (r) {
      k(r, n.context, "directive " + t.name + " " + e + " hook");
    }
}
