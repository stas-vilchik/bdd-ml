{
  var r =
    "var $$selectedVal = " +
    ('Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' +
      (n && n.number ? "_n(val)" : "val") +
      "})") +
    ";";
  sn(
    t,
    "change",
    (r =
      r +
      " " +
      fn(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]")),
    null,
    !0
  );
}
