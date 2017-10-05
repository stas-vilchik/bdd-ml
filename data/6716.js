{
  var p = this.parentNode;

  if (p) {
    p.invalidateShadowRenderer();
    var df = frag(p, value);
    p.replaceChild(df, this);
  }
}
