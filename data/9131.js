{
  var r = (t.model && t.model.prop) || "value",
    i = (t.model && t.model.event) || "input";
  (n.props || (n.props = {}))[r] = n.model.value;
  var o = n.on || (n.on = {});
  e(o[i])
    ? (o[i] = [n.model.callback].concat(o[i]))
    : (o[i] = n.model.callback);
}
