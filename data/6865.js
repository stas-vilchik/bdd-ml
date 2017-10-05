{
  if (!this.dirty) {
    this.dirty = true;
    var parentRenderer = this.parentRenderer;
    if (parentRenderer) parentRenderer.invalidate();
    pendingDirtyRenderers.push(this);
    if (renderTimer) return;
    renderTimer = window[request](handleRequestAnimationFrame, 0);
  }
}
