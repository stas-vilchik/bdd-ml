{
  var r = e.value,
    i = (n = nr(n)).data && n.data.transition,
    o = (t.__vOriginalDisplay =
      "none" === t.style.display ? "" : t.style.display);
  r && i
    ? ((n.data.show = !0),
      zn(n, function() {
        t.style.display = o;
      }))
    : (t.style.display = r ? o : "none");
}
