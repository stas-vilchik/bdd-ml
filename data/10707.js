{
  var r = e.value,
    o = (n = Dn(n)).data && n.data.transition,
    i = (t.__vOriginalDisplay =
      "none" === t.style.display ? "" : t.style.display);
  r && o
    ? ((n.data.show = !0),
      Cn(n, function() {
        t.style.display = i;
      }))
    : (t.style.display = r ? i : "none");
}
