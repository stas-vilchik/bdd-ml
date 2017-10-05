{
  var i = t.componentOptions,
    a = {
      _isComponent: !0,
      parent: n,
      propsData: i.propsData,
      _componentTag: i.tag,
      _parentVnode: t,
      _parentListeners: i.listeners,
      _renderChildren: i.children,
      _parentElm: r || null,
      _refElm: o || null
    },
    s = t.data.inlineTemplate;
  return (
    e(s) && ((a.render = s.render), (a.staticRenderFns = s.staticRenderFns)),
    new i.Ctor(a)
  );
}
