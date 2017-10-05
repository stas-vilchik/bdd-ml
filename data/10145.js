{
  if (isDef(data) && isDef(data.__ob__)) {
    "development" !== "production" &&
      warn(
        "Avoid using observed data object as vnode data: " +
          JSON.stringify(data) +
          "\n" +
          "Always create fresh vnode data objects in each render!",
        context
      );
    return createEmptyVNode();
  }

  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    return createEmptyVNode();
  }

  if (
    "development" !== "production" &&
    isDef(data) &&
    isDef(data.key) &&
    !isPrimitive(data.key)
  ) {
    warn(
      "Avoid using non-primitive value as key, " +
        "use string/number value instead.",
      context
    );
  }

  if (Array.isArray(children) && typeof children[0] === "function") {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === "string") {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      vnode = new VNode(
        config.parsePlatformTagName(tag),
        data,
        children,
        undefined,
        undefined,
        context
      );
    } else if (
      isDef((Ctor = resolveAsset(context.$options, "components", tag)))
    ) {
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    vnode = createComponent(tag, data, context, children);
  }

  if (isDef(vnode)) {
    if (ns) {
      applyNS(vnode, ns);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}
