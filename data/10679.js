{
  function i(t) {
    return new Dr(T.tagName(t).toLowerCase(), {}, [], void 0, t);
  }

  function a(t, e) {
    function n() {
      0 == --n.listeners && s(t);
    }

    return (n.listeners = e), n;
  }

  function s(t) {
    var n = T.parentNode(t);
    e(n) && T.removeChild(n, t);
  }

  function c(t, r, o, i, a) {
    if (((t.isRootInsert = !a), !u(t, r, o, i))) {
      var s = t.data,
        c = t.children,
        l = t.tag;
      e(l)
        ? ((t.elm = t.ns ? T.createElementNS(t.ns, l) : T.createElement(l, t)),
          y(t),
          v(t, c, r),
          e(s) && m(t, r),
          d(o, t.elm, i))
        : n(t.isComment)
          ? ((t.elm = T.createComment(t.text)), d(o, t.elm, i))
          : ((t.elm = T.createTextNode(t.text)), d(o, t.elm, i));
    }
  }

  function u(t, r, o, i) {
    var a = t.data;

    if (e(a)) {
      var s = e(t.componentInstance) && a.keepAlive;
      if (
        (e((a = a.hook)) && e((a = a.init)) && a(t, !1, o, i),
        e(t.componentInstance))
      )
        return l(t, r), n(s) && p(t, r, o, i), !0;
    }
  }

  function l(t, n) {
    e(t.data.pendingInsert) &&
      (n.push.apply(n, t.data.pendingInsert), (t.data.pendingInsert = null)),
      (t.elm = t.componentInstance.$el),
      h(t) ? (m(t, n), y(t)) : (Ue(t), n.push(t));
  }

  function p(t, n, r, o) {
    for (var i, a = t; a.componentInstance; )
      if (
        ((a = a.componentInstance._vnode),
        e((i = a.data)) && e((i = i.transition)))
      ) {
        for (i = 0; i < E.activate.length; ++i) E.activate[i](Ao, a);

        n.push(a);
        break;
      }

    d(r, t.elm, o);
  }

  function d(t, n, r) {
    e(t) &&
      (e(r)
        ? r.parentNode === t && T.insertBefore(t, n, r)
        : T.appendChild(t, n));
  }

  function v(t, e, n) {
    if (Array.isArray(e))
      for (var r = 0; r < e.length; ++r) c(e[r], n, t.elm, null, !0);
    else o(t.text) && T.appendChild(t.elm, T.createTextNode(t.text));
  }

  function h(t) {
    for (; t.componentInstance; ) t = t.componentInstance._vnode;

    return e(t.tag);
  }

  function m(t, n) {
    for (var r = 0; r < E.create.length; ++r) E.create[r](Ao, t);

    e((O = t.data.hook)) &&
      (e(O.create) && O.create(Ao, t), e(O.insert) && n.push(t));
  }

  function y(t) {
    for (var n, r = t; r; )
      e((n = r.context)) &&
        e((n = n.$options._scopeId)) &&
        T.setAttribute(t.elm, n, ""),
        (r = r.parent);

    e((n = Fr)) &&
      n !== t.context &&
      e((n = n.$options._scopeId)) &&
      T.setAttribute(t.elm, n, "");
  }

  function _(t, e, n, r, o, i) {
    for (; r <= o; ++r) c(n[r], i, t, e);
  }

  function g(t) {
    var n,
      r,
      o = t.data;
    if (e(o))
      for (
        e((n = o.hook)) && e((n = n.destroy)) && n(t), n = 0;
        n < E.destroy.length;
        ++n
      )
        E.destroy[n](t);
    if (e((n = t.children)))
      for (r = 0; r < t.children.length; ++r) g(t.children[r]);
  }

  function b(t, n, r, o) {
    for (; r <= o; ++r) {
      var i = n[r];
      e(i) && (e(i.tag) ? (C(i), g(i)) : s(i.elm));
    }
  }

  function C(t, n) {
    if (e(n) || e(t.data)) {
      var r,
        o = E.remove.length + 1;

      for (
        e(n) ? (n.listeners += o) : (n = a(t.elm, o)),
          e((r = t.componentInstance)) &&
            e((r = r._vnode)) &&
            e(r.data) &&
            C(r, n),
          r = 0;
        r < E.remove.length;
        ++r
      )
        E.remove[r](t, n);

      e((r = t.data.hook)) && e((r = r.remove)) ? r(t, n) : n();
    } else s(t.elm);
  }

  function A(n, r, o, i, a) {
    for (
      var s,
        u,
        l,
        f = 0,
        p = 0,
        d = r.length - 1,
        v = r[0],
        h = r[d],
        m = o.length - 1,
        y = o[0],
        g = o[m],
        C = !a;
      f <= d && p <= m;

    )
      t(v)
        ? (v = r[++f])
        : t(h)
          ? (h = r[--d])
          : Ve(v, y)
            ? ($(v, y, i), (v = r[++f]), (y = o[++p]))
            : Ve(h, g)
              ? ($(h, g, i), (h = r[--d]), (g = o[--m]))
              : Ve(v, g)
                ? ($(v, g, i),
                  C && T.insertBefore(n, v.elm, T.nextSibling(h.elm)),
                  (v = r[++f]),
                  (g = o[--m]))
                : Ve(h, y)
                  ? ($(h, y, i),
                    C && T.insertBefore(n, h.elm, v.elm),
                    (h = r[--d]),
                    (y = o[++p]))
                  : (t(s) && (s = He(r, f, d)),
                    t((u = e(y.key) ? s[y.key] : w(y, r, f, d)))
                      ? c(y, i, n, v.elm)
                      : Ve((l = r[u]), y)
                        ? ($(l, y, i),
                          (r[u] = void 0),
                          C && T.insertBefore(n, l.elm, v.elm))
                        : c(y, i, n, v.elm),
                    (y = o[++p]));

    f > d
      ? _(n, t(o[m + 1]) ? null : o[m + 1].elm, o, p, m, i)
      : p > m && b(n, r, f, d);
  }

  function w(t, n, r, o) {
    for (var i = r; i < o; i++) {
      var a = n[i];
      if (e(a) && Ve(t, a)) return i;
    }
  }

  function $(r, o, i, a) {
    if (r !== o) {
      var s = (o.elm = r.elm);
      if (n(r.isAsyncPlaceholder))
        e(o.asyncFactory.resolved)
          ? k(r.elm, o, i)
          : (o.isAsyncPlaceholder = !0);
      else if (
        n(o.isStatic) &&
        n(r.isStatic) &&
        o.key === r.key &&
        (n(o.isCloned) || n(o.isOnce))
      )
        o.componentInstance = r.componentInstance;
      else {
        var c,
          u = o.data;
        e(u) && e((c = u.hook)) && e((c = c.prepatch)) && c(r, o);
        var l = r.children,
          f = o.children;

        if (e(u) && h(o)) {
          for (c = 0; c < E.update.length; ++c) E.update[c](r, o);

          e((c = u.hook)) && e((c = c.update)) && c(r, o);
        }

        t(o.text)
          ? e(l) && e(f)
            ? l !== f && A(s, l, f, i, a)
            : e(f)
              ? (e(r.text) && T.setTextContent(s, ""),
                _(s, null, f, 0, f.length - 1, i))
              : e(l)
                ? b(s, l, 0, l.length - 1)
                : e(r.text) && T.setTextContent(s, "")
          : r.text !== o.text && T.setTextContent(s, o.text),
          e(u) && e((c = u.hook)) && e((c = c.postpatch)) && c(r, o);
      }
    }
  }

  function x(t, r, o) {
    if (n(o) && e(t.parent)) t.parent.data.pendingInsert = r;
    else for (var i = 0; i < r.length; ++i) r[i].data.hook.insert(r[i]);
  }

  function k(t, r, o) {
    if (n(r.isComment) && e(r.asyncFactory))
      return (r.elm = t), (r.isAsyncPlaceholder = !0), !0;
    r.elm = t;
    var i = r.tag,
      a = r.data,
      s = r.children;
    if (
      e(a) &&
      (e((O = a.hook)) && e((O = O.init)) && O(r, !0),
      e((O = r.componentInstance)))
    )
      return l(r, o), !0;

    if (e(i)) {
      if (e(s))
        if (t.hasChildNodes()) {
          if (e((O = a)) && e((O = O.domProps)) && e((O = O.innerHTML))) {
            if (O !== t.innerHTML) return !1;
          } else {
            for (var c = !0, u = t.firstChild, f = 0; f < s.length; f++) {
              if (!u || !k(u, s[f], o)) {
                c = !1;
                break;
              }

              u = u.nextSibling;
            }

            if (!c || u) return !1;
          }
        } else v(r, s, o);
      if (e(a))
        for (var p in a)
          if (!I(p)) {
            m(r, o);
            break;
          }
    } else t.data !== r.text && (t.data = r.text);

    return !0;
  }

  var O,
    S,
    E = {},
    j = r.modules,
    T = r.nodeOps;

  for (O = 0; O < wo.length; ++O)
    for (E[wo[O]] = [], S = 0; S < j.length; ++S)
      e(j[S][wo[O]]) && E[wo[O]].push(j[S][wo[O]]);

  var I = f("attrs,style,class,staticClass,staticStyle,key");
  return function(r, o, a, s, u, l) {
    if (!t(o)) {
      var f = !1,
        p = [];
      if (t(r)) (f = !0), c(o, p, u, l);
      else {
        var d = e(r.nodeType);
        if (!d && Ve(r, o)) $(r, o, p, s);
        else {
          if (d) {
            if (
              (1 === r.nodeType &&
                r.hasAttribute(Xn) &&
                (r.removeAttribute(Xn), (a = !0)),
              n(a) && k(r, o, p))
            )
              return x(o, p, !0), r;
            r = i(r);
          }

          var v = r.elm,
            m = T.parentNode(v);
          if ((c(o, p, v._leaveCb ? null : m, T.nextSibling(v)), e(o.parent)))
            for (var y = o.parent, _ = h(o); y; ) {
              for (var C = 0; C < E.destroy.length; ++C) E.destroy[C](y);

              if (((y.elm = o.elm), _)) {
                for (var A = 0; A < E.create.length; ++A) E.create[A](Ao, y);

                var w = y.data.hook.insert;
                if (w.merged) for (var O = 1; O < w.fns.length; O++) w.fns[O]();
              }

              y = y.parent;
            }
          e(m) ? b(m, [r], 0, 0) : e(r.tag) && g(r);
        }
      }
      return x(o, p, f), o.elm;
    }

    e(r) && g(r);
  };
}
