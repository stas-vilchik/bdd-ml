{
  function n(e) {
    (l += e), (t = t.substring(e));
  }

  function r(t, n, r) {
    var i, s;
    if (
      (null == n && (n = l),
      null == r && (r = l),
      t && (s = t.toLowerCase()),
      t)
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

  for (
    var i,
      o,
      a = [],
      s = e.expectHTML,
      c = e.isUnaryTag || xi,
      u = e.canBeLeftOpenTag || xi,
      l = 0;
    t;

  ) {
    if (((i = t), o && ys(o))) {
      var f = 0,
        p = o.toLowerCase(),
        d =
          gs[p] || (gs[p] = new RegExp("([\\s\\S]*?)(</" + p + "[^>]*>)", "i")),
        v = t.replace(d, function(t, n, r) {
          return (
            (f = r.length),
            ys(p) ||
              "noscript" === p ||
              (n = n
                .replace(/<!--([\s\S]*?)-->/g, "$1")
                .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
            ws(p, n) && (n = n.slice(1)),
            e.chars && e.chars(n),
            ""
          );
        });
      (l += t.length - v.length), (t = v), r(p, l - f, l);
    } else {
      var h = t.indexOf("<");

      if (0 === h) {
        if (is.test(t)) {
          var m = t.indexOf("--\x3e");

          if (m >= 0) {
            e.shouldKeepComment && e.comment(t.substring(4, m)), n(m + 3);
            continue;
          }
        }

        if (os.test(t)) {
          var y = t.indexOf("]>");

          if (y >= 0) {
            n(y + 2);
            continue;
          }
        }

        var g = t.match(rs);

        if (g) {
          n(g[0].length);
          continue;
        }

        var _ = t.match(ns);

        if (_) {
          var b = l;
          n(_[0].length), r(_[1], b, l);
          continue;
        }

        var $ = (function() {
          var e = t.match(ts);

          if (e) {
            var r = {
              tagName: e[1],
              attrs: [],
              start: l
            };
            n(e[0].length);

            for (var i, o; !(i = t.match(es)) && (o = t.match(Ya)); )
              n(o[0].length), r.attrs.push(o);

            if (i) return (r.unarySlash = i[1]), n(i[0].length), (r.end = l), r;
          }
        })();

        if ($) {
          !(function(t) {
            var n = t.tagName,
              i = t.unarySlash;
            s && ("p" === o && Wa(n) && r(o), u(n) && o === n && r(n));

            for (
              var l = c(n) || !!i, f = t.attrs.length, p = new Array(f), d = 0;
              d < f;
              d++
            ) {
              var v = t.attrs[d];
              as &&
                -1 === v[0].indexOf('""') &&
                ("" === v[3] && delete v[3],
                "" === v[4] && delete v[4],
                "" === v[5] && delete v[5]);
              var h = v[3] || v[4] || v[5] || "";
              p[d] = {
                name: v[1],
                value: pr(h, e.shouldDecodeNewlines)
              };
            }

            l ||
              (a.push({
                tag: n,
                lowerCasedTag: n.toLowerCase(),
                attrs: p
              }),
              (o = n)),
              e.start && e.start(n, p, l, t.start, t.end);
          })($),
            ws(o, t) && n(1);
          continue;
        }
      }

      var C = void 0,
        w = void 0,
        x = void 0;

      if (h >= 0) {
        for (
          w = t.slice(h);
          !(
            ns.test(w) ||
            ts.test(w) ||
            is.test(w) ||
            os.test(w) ||
            (x = w.indexOf("<", 1)) < 0
          );

        )
          (h += x), (w = t.slice(h));

        (C = t.substring(0, h)), n(h);
      }

      h < 0 && ((C = t), (t = "")), e.chars && C && e.chars(C);
    }

    if (t === i) {
      e.chars && e.chars(t);
      break;
    }
  }

  r();
}
