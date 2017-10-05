{
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var trim = ref.trim;
  var number = ref.number;
  var event = lazy ? "change" : "input";
  var valueExpression = "$event.target.attr.value" + (trim ? ".trim()" : "");

  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  addAttr(el, "value", "(" + value + ")");
  addHandler(el, event, code, null, true);
}
