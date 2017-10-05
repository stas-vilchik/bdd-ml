{
  (this.value = t),
    (this.dep = new $r()),
    (this.vmCount = 0),
    $(t, "__ob__", this),
    Array.isArray(t)
      ? ((ir ? j : T)(t, Or, Sr), this.observeArray(t))
      : this.walk(t);
}
