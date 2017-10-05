{
  var r = t.attrsMap.type,
    i = n || {},
    o = i.lazy,
    a = i.number,
    s = i.trim,
    c = !o && "range" !== r,
    u = o ? "change" : "range" === r ? pa : "input",
    l = "$event.target.value";
  s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");
  var f = fn(e, l);
  c && (f = "if($event.target.composing)return;" + f),
    rn(t, "value", "(" + e + ")"),
    sn(t, u, f, null, !0),
    (s || a) && sn(t, "blur", "$forceUpdate()");
}
