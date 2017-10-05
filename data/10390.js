{
  if (i(t)) {
    var n;
    return (
      d(t, "__ob__") && t.__ob__ instanceof jr
        ? (n = t.__ob__)
        : Er.shouldConvert &&
          !gr() &&
          (Array.isArray(t) || a(t)) &&
          Object.isExtensible(t) &&
          !t._isVue &&
          (n = new jr(t)),
      e && n && n.vmCount++,
      n
    );
  }
}
