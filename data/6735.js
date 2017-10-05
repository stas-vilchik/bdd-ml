{
  HTMLElement.prototype.setAttribute.call(this, n, v);
  if (String(n).toLowerCase() === "select") this.invalidateShadowRenderer(true);
}
