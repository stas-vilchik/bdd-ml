{
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== "production") {
    var dynamicType = el.attrsMap["v-bind:type"] || el.attrsMap[":type"];

    if (tag === "input" && dynamicType) {
      warn$1(
        '<input :type="' +
          dynamicType +
          '" v-model="' +
          value +
          '">:\n' +
          "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }

    if (tag === "input" && type === "file") {
      warn$1(
        "<" +
          el.tag +
          ' v-model="' +
          value +
          '" type="file">:\n' +
          "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    return false;
  } else if (tag === "select") {
    genSelect(el, value, modifiers);
  } else if (tag === "input" && type === "checkbox") {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === "input" && type === "radio") {
    genRadioModel(el, value, modifiers);
  } else if (tag === "input" || tag === "textarea") {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    return false;
  } else if (process.env.NODE_ENV !== "production") {
    warn$1(
      "<" +
        el.tag +
        ' v-model="' +
        value +
        '">: ' +
        "v-model is not supported on this element type. " +
        "If you are working with contenteditable, it's recommended to " +
        "wrap a library dedicated for that purpose inside a custom component."
    );
  }

  return true;
}
