{
  var e = t.id;

  if (null == mo[e]) {
    if (((mo[e] = !0), go)) {
      for (var n = vo.length - 1; n > _o && vo[n].id > t.id; ) n--;

      vo.splice(n + 1, 0, t);
    } else vo.push(t);

    yo || ((yo = !0), Zi(St));
  }
}
