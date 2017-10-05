{
  function n(t) {
    t.pre && (s = !1), ps(t.tag) && (c = !1);
  }

  (ss = e.warn || en),
    (ps = e.isPreTag || xi),
    (ds = e.mustUseProp || xi),
    (vs = e.getTagNamespace || xi),
    (us = nn(e.modules, "transformNode")),
    (ls = nn(e.modules, "preTransformNode")),
    (fs = nn(e.modules, "postTransformNode")),
    (cs = e.delimiters);
  var r,
    i,
    o = [],
    a = !1 !== e.preserveWhitespace,
    s = !1,
    c = !1;
  return (
    dr(t, {
      warn: ss,
      expectHTML: e.expectHTML,
      isUnaryTag: e.isUnaryTag,
      canBeLeftOpenTag: e.canBeLeftOpenTag,
      shouldDecodeNewlines: e.shouldDecodeNewlines,
      shouldKeepComment: e.comments,
      start: function(t, a, u) {
        function l(t) {}

        var f = (i && i.ns) || vs(t);
        Di && "svg" === f && (a = Nr(a));
        var p = {
          type: 1,
          tag: t,
          attrsList: a,
          attrsMap: Er(a),
          parent: i,
          children: []
        };
        f && (p.ns = f), Lr(p) && !qi() && (p.forbidden = !0);

        for (var d = 0; d < ls.length; d++) ls[d](p, e);

        if ((s || (hr(p), p.pre && (s = !0)), ps(p.tag) && (c = !0), s)) mr(p);
        else {
          _r(p),
            br(p),
            xr(p),
            yr(p),
            (p.plain = !p.key && !a.length),
            gr(p),
            Ar(p),
            kr(p);

          for (var v = 0; v < us.length; v++) us[v](p, e);

          Or(p);
        }
        if (
          (r
            ? o.length ||
              (r.if &&
                (p.elseif || p.else) &&
                (l(),
                wr(r, {
                  exp: p.elseif,
                  block: p
                })))
            : ((r = p), l()),
          i && !p.forbidden)
        )
          if (p.elseif || p.else) $r(p, i);
          else if (p.slotScope) {
            i.plain = !1;
            var h = p.slotTarget || '"default"';
            (i.scopedSlots || (i.scopedSlots = {}))[h] = p;
          } else i.children.push(p), (p.parent = i);
        u ? n(p) : ((i = p), o.push(p));

        for (var m = 0; m < fs.length; m++) fs[m](p, e);
      },
      end: function() {
        var t = o[o.length - 1],
          e = t.children[t.children.length - 1];
        e && 3 === e.type && " " === e.text && !c && t.children.pop(),
          (o.length -= 1),
          (i = o[o.length - 1]),
          n(t);
      },
      chars: function(t) {
        if (
          i &&
          (!Di || "textarea" !== i.tag || i.attrsMap.placeholder !== t)
        ) {
          var e = i.children;

          if (
            (t = c || t.trim() ? (jr(i) ? t : js(t)) : a && e.length ? " " : "")
          ) {
            var n;
            !s && " " !== t && (n = fr(t, cs))
              ? e.push({
                  type: 2,
                  expression: n,
                  text: t
                })
              : (" " === t && e.length && " " === e[e.length - 1].text) ||
                e.push({
                  type: 3,
                  text: t
                });
          }
        }
      },
      comment: function(t) {
        i.children.push({
          type: 3,
          text: t,
          isComment: !0
        });
      }
    }),
    r
  );
}
