{
  var n = "{",
    r = Yr(t, e);
  r && (n += r + ","),
    t.key && (n += "key:" + t.key + ","),
    t.ref && (n += "ref:" + t.ref + ","),
    t.refInFor && (n += "refInFor:true,"),
    t.pre && (n += "pre:true,"),
    t.component && (n += 'tag:"' + t.tag + '",');

  for (var i = 0; i < e.dataGenFns.length; i++) n += e.dataGenFns[i](t);

  if (
    (t.attrs && (n += "attrs:{" + li(t.attrs) + "},"),
    t.props && (n += "domProps:{" + li(t.props) + "},"),
    t.events && (n += Rr(t.events, !1, e.warn) + ","),
    t.nativeEvents && (n += Rr(t.nativeEvents, !0, e.warn) + ","),
    t.slotTarget && (n += "slot:" + t.slotTarget + ","),
    t.scopedSlots && (n += Xr(t.scopedSlots, e) + ","),
    t.model &&
      (n +=
        "model:{value:" +
        t.model.value +
        ",callback:" +
        t.model.callback +
        ",expression:" +
        t.model.expression +
        "},"),
    t.inlineTemplate)
  ) {
    var o = Qr(t, e);
    o && (n += o + ",");
  }

  return (
    (n = n.replace(/,$/, "") + "}"),
    t.wrapData && (n = t.wrapData(n)),
    t.wrapListeners && (n = t.wrapListeners(n)),
    n
  );
}
