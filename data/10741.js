{
  var total = this.stats.length;
  return this.stats
    .map(function(stat, i) {
      var point = valueToPoint(stat.value, i, total);
      return point.x + "," + point.y;
    })
    .join(" ");
}
