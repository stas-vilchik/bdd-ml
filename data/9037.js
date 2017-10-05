{
  if (o(t)) {
    var n;
    return (
      d(t, "__ob__") && t.__ob__ instanceof io
        ? (n = t.__ob__)
        : ro.shouldConvert &&
          !qi() &&
          (Array.isArray(t) || a(t)) &&
          Object.isExtensible(t) &&
          !t._isVue &&
          (n = new io(t)),
      e && n && n.vmCount++,
      n
    );
  }
}
