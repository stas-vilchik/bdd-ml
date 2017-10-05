{
  if (!this.isFolder) {
    Vue.set(this.model, "children", []);
    this.addChild();
    this.open = true;
  }
}
