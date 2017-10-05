{
  var n = (t.$options = Object.create(t.constructor.options));
  (n.parent = e.parent),
    (n.propsData = e.propsData),
    (n._parentVnode = e._parentVnode),
    (n._parentListeners = e._parentListeners),
    (n._renderChildren = e._renderChildren),
    (n._componentTag = e._componentTag),
    (n._parentElm = e._parentElm),
    (n._refElm = e._refElm),
    e.render &&
      ((n.render = e.render), (n.staticRenderFns = e.staticRenderFns));
}
