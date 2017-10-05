{
  var write = context.write;
  var next = context.next;

  if (isTrue(isRoot)) {
    if (!el.data) {
      el.data = {};
    }

    if (!el.data.attrs) {
      el.data.attrs = {};
    }

    el.data.attrs[SSR_ATTR] = "true";
  }

  if (el.functionalOptions) {
    registerComponentForCache(el.functionalOptions, write);
  }

  var startTag = renderStartingTag(el, context);
  var endTag = "</" + el.tag + ">";

  if (context.isUnaryTag(el.tag)) {
    write(startTag, next);
  } else if (isUndef(el.children) || el.children.length === 0) {
    write(startTag + endTag, next);
  } else {
    var children = el.children;
    context.renderStates.push({
      type: "Element",
      rendered: 0,
      total: children.length,
      endTag: endTag,
      children: children
    });
    write(startTag, next);
  }
}
