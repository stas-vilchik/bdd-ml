{
  if (d(e, "default")) {
    var r = e.default;
    return t &&
      t.$options.propsData &&
      void 0 === t.$options.propsData[n] &&
      void 0 !== t._props[n]
      ? t._props[n]
      : "function" == typeof r && "Function" !== G(e.type) ? r.call(t) : r;
  }
}
