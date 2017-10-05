{
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return (
    "_c(" +
    componentName +
    "," +
    genData(el, state) +
    (children ? "," + children : "") +
    ")"
  );
}
