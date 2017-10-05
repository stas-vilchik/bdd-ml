{
  var r = e.value;
  r !== e.oldValue &&
    ((n = Dn(n)).data && n.data.transition
      ? ((n.data.show = !0),
        r
          ? Cn(n, function() {
              t.style.display = t.__vOriginalDisplay;
            })
          : An(n, function() {
              t.style.display = "none";
            }))
      : (t.style.display = r ? t.__vOriginalDisplay : "none"));
}
