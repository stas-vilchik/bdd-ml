{
  if (Array.isArray(e))
    for (var r = 0; r < e.length; ++r) c(e[r], n, t.elm, null, !0);
  else o(t.text) && T.appendChild(t.elm, T.createTextNode(t.text));
}
