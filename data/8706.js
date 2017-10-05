{
  var vnode = getFirstComponentChild(this.$slots.default);
  var componentOptions = vnode && vnode.componentOptions;

  if (componentOptions) {
    var name = getComponentName(componentOptions);

    if (
      name &&
      ((this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name)))
    ) {
      return vnode;
    }

    var key =
      vnode.key == null
        ? componentOptions.Ctor.cid +
          (componentOptions.tag ? "::" + componentOptions.tag : "")
        : vnode.key;

    if (this.cache[key]) {
      vnode.componentInstance = this.cache[key].componentInstance;
    } else {
      this.cache[key] = vnode;
    }

    vnode.data.keepAlive = true;
  }

  return vnode;
}
