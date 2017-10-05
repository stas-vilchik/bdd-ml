{
  if (this.stats.length > 3) {
    this.stats.splice(this.stats.indexOf(stat), 1);
  } else {
    alert("Can't delete more!");
  }
}
