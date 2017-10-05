{
  var ref = options || {};
  var contextKey = ref.contextKey;
  if (contextKey === void 0) contextKey = "state";
  var windowKey = ref.windowKey;
  if (windowKey === void 0) windowKey = "__INITIAL_STATE__";
  return context[contextKey]
    ? "<script>window." +
        windowKey +
        "=" +
        serialize(context[contextKey], {
          isJSON: true
        }) +
        "</script>"
    : "";
}
