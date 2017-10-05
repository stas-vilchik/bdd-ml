{
  var r = e.value;
  r !== e.oldValue &&
    ((n = nr(n)).data && n.data.transition
      ? ((n.data.show = !0),
        r
          ? zn(n, function() {
              t.style.display = t.__vOriginalDisplay;
            })
          : Kn(n, function() {
              t.style.display = "none";
            }))
      : (t.style.display = r ? t.__vOriginalDisplay : "none"));
}
