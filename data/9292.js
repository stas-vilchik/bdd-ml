{
  if ("slot" === t.tag) t.slotName = cn(t, "name");
  else {
    var e = cn(t, "slot");
    e && ((t.slotTarget = '""' === e ? '"default"' : e), on(t, "slot", e)),
      "template" === t.tag && (t.slotScope = un(t, "scope"));
  }
}
