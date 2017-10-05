{
  var binding;

  if ((binding = el.attrsMap["v-html"])) {
    return [
      {
        type: EXPRESSION,
        value: "_s(" + binding + ")"
      }
    ];
  }

  if ((binding = el.attrsMap["v-text"])) {
    return [
      {
        type: INTERPOLATION,
        value: "_s(" + binding + ")"
      }
    ];
  }

  return el.children ? nodesToSegments(el.children, state) : [];
}
