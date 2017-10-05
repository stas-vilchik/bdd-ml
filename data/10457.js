{
  var e = t.id;

  if (null == Vr[e]) {
    if (((Vr[e] = !0), Hr)) {
      for (var n = Rr.length - 1; n > zr && Rr[n].id > t.id; ) n--;

      Rr.splice(n + 1, 0, t);
    } else Rr.push(t);

    Br || ((Br = !0), Ar(Et));
  }
}
