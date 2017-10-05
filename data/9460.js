{
  var t = this.prevChildren,
    e = this.moveClass || (this.name || "v") + "-move";

  if (t.length && this.hasMove(t[0].elm, e)) {
    t.forEach(cr), t.forEach(ur), t.forEach(lr);
    document.body.offsetHeight;
    t.forEach(function(t) {
      if (t.data.moved) {
        var n = t.elm,
          r = n.style;
        Fn(n, e),
          (r.transform = r.WebkitTransform = r.transitionDuration = ""),
          n.addEventListener(
            Ta,
            (n._moveCb = function t(r) {
              (r && !/transform$/.test(r.propertyName)) ||
                (n.removeEventListener(Ta, t), (n._moveCb = null), Rn(n, e));
            })
          );
      }
    });
  }
}
