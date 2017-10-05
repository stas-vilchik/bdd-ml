{
  var e = t.data.pos,
    n = t.data.newPos,
    r = e.left - n.left,
    i = e.top - n.top;

  if (r || i) {
    t.data.moved = !0;
    var o = t.elm.style;
    (o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)"),
      (o.transitionDuration = "0s");
  }
}
