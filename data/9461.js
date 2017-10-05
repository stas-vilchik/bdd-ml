{
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
}
