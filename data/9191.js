{
  function e() {
    (a || (a = [])).push(t.slice(v, i).trim()), (v = i + 1);
  }

  var n,
    r,
    i,
    o,
    a,
    s = !1,
    c = !1,
    u = !1,
    l = !1,
    f = 0,
    p = 0,
    d = 0,
    v = 0;

  for (i = 0; i < t.length; i++)
    if (((r = n), (n = t.charCodeAt(i)), s)) 39 === n && 92 !== r && (s = !1);
    else if (c) 34 === n && 92 !== r && (c = !1);
    else if (u) 96 === n && 92 !== r && (u = !1);
    else if (l) 47 === n && 92 !== r && (l = !1);
    else if (
      124 !== n ||
      124 === t.charCodeAt(i + 1) ||
      124 === t.charCodeAt(i - 1) ||
      f ||
      p ||
      d
    ) {
      switch (n) {
        case 34:
          c = !0;
          break;

        case 39:
          s = !0;
          break;

        case 96:
          u = !0;
          break;

        case 40:
          d++;
          break;

        case 41:
          d--;
          break;

        case 91:
          p++;
          break;

        case 93:
          p--;
          break;

        case 123:
          f++;
          break;

        case 125:
          f--;
      }

      if (47 === n) {
        for (
          var h = i - 1, m = void 0;
          h >= 0 && " " === (m = t.charAt(h));
          h--
        );

        (m && fa.test(m)) || (l = !0);
      }
    } else void 0 === o ? ((v = i + 1), (o = t.slice(0, i).trim())) : e();

  if ((void 0 === o ? (o = t.slice(0, i).trim()) : 0 !== v && e(), a))
    for (i = 0; i < a.length; i++) o = tn(o, a[i]);
  return o;
}
