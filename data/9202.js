{
  var r = n || {},
    i = r.number,
    o = "$$v";
  r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
    i && (o = "_n(" + o + ")");
  var a = fn(e, o);
  t.model = {
    value: "(" + e + ")",
    expression: '"' + e + '"',
    callback: "function ($$v) {" + a + "}"
  };
}
