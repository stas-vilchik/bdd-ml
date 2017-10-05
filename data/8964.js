{
  var data = "{";
  var dirs = genDirectives(el, state);

  if (dirs) {
    data += dirs + ",";
  }

  if (el.key) {
    data += "key:" + el.key + ",";
  }

  if (el.ref) {
    data += "ref:" + el.ref + ",";
  }

  if (el.refInFor) {
    data += "refInFor:true,";
  }

  if (el.pre) {
    data += "pre:true,";
  }

  if (el.component) {
    data += 'tag:"' + el.tag + '",';
  }

  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }

  if (el.attrs) {
    data += "attrs:{" + genProps(el.attrs) + "},";
  }

  if (el.props) {
    data += "domProps:{" + genProps(el.props) + "},";
  }

  if (el.events) {
    data += genHandlers(el.events, false, state.warn) + ",";
  }

  if (el.nativeEvents) {
    data += genHandlers(el.nativeEvents, true, state.warn) + ",";
  }

  if (el.slotTarget) {
    data += "slot:" + el.slotTarget + ",";
  }

  if (el.scopedSlots) {
    data += genScopedSlots(el.scopedSlots, state) + ",";
  }

  if (el.model) {
    data +=
      "model:{value:" +
      el.model.value +
      ",callback:" +
      el.model.callback +
      ",expression:" +
      el.model.expression +
      "},";
  }

  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);

    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }

  data = data.replace(/,$/, "") + "}";

  if (el.wrapData) {
    data = el.wrapData(data);
  }

  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }

  return data;
}
