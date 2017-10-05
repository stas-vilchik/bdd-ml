{
  var this$1 = this;
  var i = this.deps.length;

  while (i--) {
    this$1.deps[i].depend();
  }
}
