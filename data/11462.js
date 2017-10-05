{
  applyModelTransform(el, state);
  var binding;
  var segments = [
    {
      type: RAW,
      value: "<" + el.tag
    }
  ];

  if (el.attrs) {
    segments.push.apply(segments, genAttrSegments(el.attrs));
  }

  if (el.props) {
    segments.push.apply(segments, genDOMPropSegments(el.props, el.attrs));
  }

  if ((binding = el.attrsMap["v-bind"])) {
    segments.push({
      type: EXPRESSION,
      value: "_ssrAttrs(" + binding + ")"
    });
  }

  if ((binding = el.attrsMap["v-bind.prop"])) {
    segments.push({
      type: EXPRESSION,
      value: "_ssrDOMProps(" + binding + ")"
    });
  }

  if (el.staticClass || el.classBinding) {
    segments.push.apply(
      segments,
      genClassSegments(el.staticClass, el.classBinding)
    );
  }

  if (el.staticStyle || el.styleBinding || el.attrsMap["v-show"]) {
    segments.push.apply(
      segments,
      genStyleSegments(
        el.attrsMap.style,
        el.staticStyle,
        el.styleBinding,
        el.attrsMap["v-show"]
      )
    );
  }

  if (state.options.scopeId) {
    segments.push({
      type: RAW,
      value: " " + state.options.scopeId
    });
  }

  segments.push({
    type: RAW,
    value: ">"
  });
  return segments;
}
