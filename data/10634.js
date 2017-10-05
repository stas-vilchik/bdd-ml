{
  if (this.active) {
    var t = this.get();

    if (t !== this.value || i(t) || this.deep) {
      var e = this.value;
      if (((this.value = t), this.user))
        try {
          this.cb.call(this.vm, t, e);
        } catch (t) {
          k(t, this.vm, 'callback for watcher "' + this.expression + '"');
        }
      else this.cb.call(this.vm, t, e);
    }
  }
}
