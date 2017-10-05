{
  "select" === n.tag
    ? (kn(t, e, n.context), (t._vOptions = [].map.call(t.options, En)))
    : ("textarea" === n.tag || go(t.type)) &&
      ((t._vModifiers = e.modifiers),
      e.modifiers.lazy ||
        (t.addEventListener("change", Tn),
        fr ||
          (t.addEventListener("compositionstart", jn),
          t.addEventListener("compositionend", Tn)),
        ur && (t.vmodel = !0)));
}
