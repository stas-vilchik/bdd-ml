{
  e.preventDefault();
  if (!this.newLabel) return;
  this.stats.push({
    label: this.newLabel,
    value: 100
  });
  this.newLabel = "";
}
