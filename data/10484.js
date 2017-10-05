{
  var r = (t.model && t.model.prop) || "value",
    o = (t.model && t.model.event) || "input";
  (n.props || (n.props = {}))[r] = n.model.value;
  var i = n.on || (n.on = {});
  e(i[o])
    ? (i[o] = [n.model.callback].concat(i[o]))
    : (i[o] = n.model.callback);
}
