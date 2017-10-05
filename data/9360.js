{
  (this.value = t),
    (this.dep = new Qi()),
    (this.vmCount = 0),
    x(t, "__ob__", this),
    Array.isArray(t)
      ? ((Ni ? E : j)(t, eo, no), this.observeArray(t))
      : this.walk(t);
}
