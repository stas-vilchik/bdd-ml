{
  "select" === n.tag
    ? (Gn(t, e, n.context), (t._vOptions = [].map.call(t.options, Qn)))
    : ("textarea" === n.tag || ea(t.type)) &&
      ((t._vModifiers = e.modifiers),
      e.modifiers.lazy ||
        (t.addEventListener("change", tr),
        Ri ||
          (t.addEventListener("compositionstart", Xn),
          t.addEventListener("compositionend", tr)),
        Pi && (t.vmodel = !0)));
}
