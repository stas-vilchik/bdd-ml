{
  var o = t.componentOptions,
    a = {
      _isComponent: !0,
      parent: n,
      propsData: o.propsData,
      _componentTag: o.tag,
      _parentVnode: t,
      _parentListeners: o.listeners,
      _renderChildren: o.children,
      _parentElm: r || null,
      _refElm: i || null
    },
    s = t.data.inlineTemplate;
  return (
    e(s) && ((a.render = s.render), (a.staticRenderFns = s.staticRenderFns)),
    new o.Ctor(a)
  );
}
