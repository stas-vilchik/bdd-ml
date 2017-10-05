{
  function o(t) {
    return new so(j.tagName(t).toLowerCase(), {}, [], void 0, t);
  }

  function a(t, e) {
    function n() {
      0 == --n.listeners && s(t);
    }

    return (n.listeners = e), n;
  }

  function s(t) {
    var n = j.parentNode(t);
    e(n) && j.removeChild(n, t);
  }

  function c(t, r, i, o, a) {
    if (((t.isRootInsert = !a), !u(t, r, i, o))) {
      var s = t.data,
        c = t.children,
        l = t.tag;
      e(l)
        ? ((t.elm = t.ns ? j.createElementNS(t.ns, l) : j.createElement(l, t)),
          y(t),
          v(t, c, r),
          e(s) && m(t, r),
          d(i, t.elm, o))
        : n(t.isComment)
          ? ((t.elm = j.createComment(t.text)), d(i, t.elm, o))
          : ((t.elm = j.createTextNode(t.text)), d(i, t.elm, o));
    }
  }

  function u(t, r, i, o) {
    var a = t.data;

    if (e(a)) {
      var s = e(t.componentInstance) && a.keepAlive;
      if (
        (e((a = a.hook)) && e((a = a.init)) && a(t, !1, i, o),
        e(t.componentInstance))
      )
        return l(t, r), n(s) && p(t, r, i, o), !0;
    }
  }

  function l(t, n) {
    e(t.data.pendingInsert) &&
      (n.push.apply(n, t.data.pendingInsert), (t.data.pendingInsert = null)),
      (t.elm = t.componentInstance.$el),
      h(t) ? (m(t, n), y(t)) : (Be(t), n.push(t));
  }

  function p(t, n, r, i) {
    for (var o, a = t; a.componentInstance; )
      if (
        ((a = a.componentInstance._vnode),
        e((o = a.data)) && e((o = o.transition)))
      ) {
        for (o = 0; o < S.activate.length; ++o) S.activate[o](ia, a);

        n.push(a);
        break;
      }

    d(r, t.elm, i);
  }

  function d(t, n, r) {
    e(t) &&
      (e(r)
        ? r.parentNode === t && j.insertBefore(t, n, r)
        : j.appendChild(t, n));
  }

  function v(t, e, n) {
    if (Array.isArray(e))
      for (var r = 0; r < e.length; ++r) c(e[r], n, t.elm, null, !0);
    else i(t.text) && j.appendChild(t.elm, j.createTextNode(t.text));
  }

  function h(t) {
    for (; t.componentInstance; ) t = t.componentInstance._vnode;

    return e(t.tag);
  }

  function m(t, n) {
    for (var r = 0; r < S.create.length; ++r) S.create[r](ia, t);

    e((O = t.data.hook)) &&
      (e(O.create) && O.create(ia, t), e(O.insert) && n.push(t));
  }

  function y(t) {
    for (var n, r = t; r; )
      e((n = r.context)) &&
        e((n = n.$options._scopeId)) &&
        j.setAttribute(t.elm, n, ""),
        (r = r.parent);

    e((n = po)) &&
      n !== t.context &&
      e((n = n.$options._scopeId)) &&
      j.setAttribute(t.elm, n, "");
  }

  function g(t, e, n, r, i, o) {
    for (; r <= i; ++r) c(n[r], o, t, e);
  }

  function _(t) {
    var n,
      r,
      i = t.data;
    if (e(i))
      for (
        e((n = i.hook)) && e((n = n.destroy)) && n(t), n = 0;
        n < S.destroy.length;
        ++n
      )
        S.destroy[n](t);
    if (e((n = t.children)))
      for (r = 0; r < t.children.length; ++r) _(t.children[r]);
  }

  function b(t, n, r, i) {
    for (; r <= i; ++r) {
      var o = n[r];
      e(o) && (e(o.tag) ? ($(o), _(o)) : s(o.elm));
    }
  }

  function $(t, n) {
    if (e(n) || e(t.data)) {
      var r,
        i = S.remove.length + 1;

      for (
        e(n) ? (n.listeners += i) : (n = a(t.elm, i)),
          e((r = t.componentInstance)) &&
            e((r = r._vnode)) &&
            e(r.data) &&
            $(r, n),
          r = 0;
        r < S.remove.length;
        ++r
      )
        S.remove[r](t, n);

      e((r = t.data.hook)) && e((r = r.remove)) ? r(t, n) : n();
    } else s(t.elm);
  }

  function C(n, r, i, o, a) {
    for (
      var s,
        u,
        l,
        f = 0,
        p = 0,
        d = r.length - 1,
        v = r[0],
        h = r[d],
        m = i.length - 1,
        y = i[0],
        _ = i[m],
        $ = !a;
      f <= d && p <= m;

    )
      t(v)
        ? (v = r[++f])
        : t(h)
          ? (h = r[--d])
          : Ue(v, y)
            ? (x(v, y, o), (v = r[++f]), (y = i[++p]))
            : Ue(h, _)
              ? (x(h, _, o), (h = r[--d]), (_ = i[--m]))
              : Ue(v, _)
                ? (x(v, _, o),
                  $ && j.insertBefore(n, v.elm, j.nextSibling(h.elm)),
                  (v = r[++f]),
                  (_ = i[--m]))
                : Ue(h, y)
                  ? (x(h, y, o),
                    $ && j.insertBefore(n, h.elm, v.elm),
                    (h = r[--d]),
                    (y = i[++p]))
                  : (t(s) && (s = ze(r, f, d)),
                    t((u = e(y.key) ? s[y.key] : w(y, r, f, d)))
                      ? c(y, o, n, v.elm)
                      : Ue((l = r[u]), y)
                        ? (x(l, y, o),
                          (r[u] = void 0),
                          $ && j.insertBefore(n, l.elm, v.elm))
                        : c(y, o, n, v.elm),
                    (y = i[++p]));

    f > d
      ? g(n, t(i[m + 1]) ? null : i[m + 1].elm, i, p, m, o)
      : p > m && b(n, r, f, d);
  }

  function w(t, n, r, i) {
    for (var o = r; o < i; o++) {
      var a = n[o];
      if (e(a) && Ue(t, a)) return o;
    }
  }

  function x(r, i, o, a) {
    if (r !== i) {
      var s = (i.elm = r.elm);
      if (n(r.isAsyncPlaceholder))
        e(i.asyncFactory.resolved)
          ? k(r.elm, i, o)
          : (i.isAsyncPlaceholder = !0);
      else if (
        n(i.isStatic) &&
        n(r.isStatic) &&
        i.key === r.key &&
        (n(i.isCloned) || n(i.isOnce))
      )
        i.componentInstance = r.componentInstance;
      else {
        var c,
          u = i.data;
        e(u) && e((c = u.hook)) && e((c = c.prepatch)) && c(r, i);
        var l = r.children,
          f = i.children;

        if (e(u) && h(i)) {
          for (c = 0; c < S.update.length; ++c) S.update[c](r, i);

          e((c = u.hook)) && e((c = c.update)) && c(r, i);
        }

        t(i.text)
          ? e(l) && e(f)
            ? l !== f && C(s, l, f, o, a)
            : e(f)
              ? (e(r.text) && j.setTextContent(s, ""),
                g(s, null, f, 0, f.length - 1, o))
              : e(l)
                ? b(s, l, 0, l.length - 1)
                : e(r.text) && j.setTextContent(s, "")
          : r.text !== i.text && j.setTextContent(s, i.text),
          e(u) && e((c = u.hook)) && e((c = c.postpatch)) && c(r, i);
      }
    }
  }

  function A(t, r, i) {
    if (n(i) && e(t.parent)) t.parent.data.pendingInsert = r;
    else for (var o = 0; o < r.length; ++o) r[o].data.hook.insert(r[o]);
  }

  function k(t, r, i) {
    if (n(r.isComment) && e(r.asyncFactory))
      return (r.elm = t), (r.isAsyncPlaceholder = !0), !0;
    r.elm = t;
    var o = r.tag,
      a = r.data,
      s = r.children;
    if (
      e(a) &&
      (e((O = a.hook)) && e((O = O.init)) && O(r, !0),
      e((O = r.componentInstance)))
    )
      return l(r, i), !0;

    if (e(o)) {
      if (e(s))
        if (t.hasChildNodes()) {
          if (e((O = a)) && e((O = O.domProps)) && e((O = O.innerHTML))) {
            if (O !== t.innerHTML) return !1;
          } else {
            for (var c = !0, u = t.firstChild, f = 0; f < s.length; f++) {
              if (!u || !k(u, s[f], i)) {
                c = !1;
                break;
              }

              u = u.nextSibling;
            }

            if (!c || u) return !1;
          }
        } else v(r, s, i);
      if (e(a))
        for (var p in a)
          if (!L(p)) {
            m(r, i);
            break;
          }
    } else t.data !== r.text && (t.data = r.text);

    return !0;
  }

  var O,
    T,
    S = {},
    E = r.modules,
    j = r.nodeOps;

  for (O = 0; O < oa.length; ++O)
    for (S[oa[O]] = [], T = 0; T < E.length; ++T)
      e(E[T][oa[O]]) && S[oa[O]].push(E[T][oa[O]]);

  var L = f("attrs,style,class,staticClass,staticStyle,key");
  return function(r, i, a, s, u, l) {
    if (!t(i)) {
      var f = !1,
        p = [];
      if (t(r)) (f = !0), c(i, p, u, l);
      else {
        var d = e(r.nodeType);
        if (!d && Ue(r, i)) x(r, i, p, s);
        else {
          if (d) {
            if (
              (1 === r.nodeType &&
                r.hasAttribute(ki) &&
                (r.removeAttribute(ki), (a = !0)),
              n(a) && k(r, i, p))
            )
              return A(i, p, !0), r;
            r = o(r);
          }

          var v = r.elm,
            m = j.parentNode(v);
          if ((c(i, p, v._leaveCb ? null : m, j.nextSibling(v)), e(i.parent)))
            for (var y = i.parent, g = h(i); y; ) {
              for (var $ = 0; $ < S.destroy.length; ++$) S.destroy[$](y);

              if (((y.elm = i.elm), g)) {
                for (var C = 0; C < S.create.length; ++C) S.create[C](ia, y);

                var w = y.data.hook.insert;
                if (w.merged) for (var O = 1; O < w.fns.length; O++) w.fns[O]();
              }

              y = y.parent;
            }
          e(m) ? b(m, [r], 0, 0) : e(r.tag) && _(r);
        }
      }
      return A(i, p, f), i.elm;
    }

    e(r) && _(r);
  };
}
