{
  var i, s;
  if (
    (null == n && (n = l), null == r && (r = l), t && (s = t.toLowerCase()), t)
  )
    for (i = a.length - 1; i >= 0 && a[i].lowerCasedTag !== s; i--);
  else i = 0;

  if (i >= 0) {
    for (var c = a.length - 1; c >= i; c--) e.end && e.end(a[c].tag, n, r);

    (a.length = i), (o = i && a[i - 1].tag);
  } else
    "br" === s
      ? e.start && e.start(t, [], !0, n, r)
      : "p" === s &&
        (e.start && e.start(t, [], !1, n, r), e.end && e.end(t, n, r));
}
