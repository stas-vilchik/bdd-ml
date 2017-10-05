{
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base;

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== "function") {
    if (process.env.NODE_ENV !== "production") {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  }

  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);

    if (Ctor === undefined) {
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {};
  resolveConstructorOptions(Ctor);

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  }

  var listeners = data.on;
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  }

  mergeHooks(data);
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    "vue-component-" + Ctor.cid + (name ? "-" + name : ""),
    data,
    undefined,
    undefined,
    undefined,
    context,
    {
      Ctor: Ctor,
      propsData: propsData,
      listeners: listeners,
      tag: tag,
      children: children
    },
    asyncFactory
  );
  return vnode;
}
