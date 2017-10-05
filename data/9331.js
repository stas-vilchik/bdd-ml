{
  var n = t.slotName || '"default"',
    r = ni(t, e),
    i = "_t(" + n + (r ? "," + r : ""),
    o =
      t.attrs &&
      "{" +
        t.attrs
          .map(function(t) {
            return bi(t.name) + ":" + t.value;
          })
          .join(",") +
        "}",
    a = t.attrsMap["v-bind"];
  return (
    (!o && !a) || r || (i += ",null"),
    o && (i += "," + o),
    a && (i += (o ? "" : ",null") + "," + a),
    i + ")"
  );
}
