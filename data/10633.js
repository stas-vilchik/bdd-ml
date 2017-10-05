{
  this.lazy ? (this.dirty = !0) : this.sync ? this.run() : Dt(this);
}
