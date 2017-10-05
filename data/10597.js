{
  var e = t.data.pos,
    n = t.data.newPos,
    r = e.left - n.left,
    o = e.top - n.top;

  if (r || o) {
    t.data.moved = !0;
    var i = t.elm.style;
    (i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)"),
      (i.transitionDuration = "0s");
  }
}
