{
  var t = this.prevChildren,
    e = this.moveClass || (this.name || "v") + "-move";

  if (t.length && this.hasMove(t[0].elm, e)) {
    t.forEach(Rn), t.forEach(Un), t.forEach(Vn);
    document.body.offsetHeight;
    t.forEach(function(t) {
      if (t.data.moved) {
        var n = t.elm,
          r = n.style;
        hn(n, e),
          (r.transform = r.WebkitTransform = r.transitionDuration = ""),
          n.addEventListener(
            Wo,
            (n._moveCb = function t(r) {
              (r && !/transform$/.test(r.propertyName)) ||
                (n.removeEventListener(Wo, t), (n._moveCb = null), mn(n, e));
            })
          );
      }
    });
  }
}
