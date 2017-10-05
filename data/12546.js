{
  var points = stats
    .map(function(stat, i) {
      var point = valueToPoint(stat.value, i, 5);
      return point.x + "," + point.y;
    })
    .join(" ");
  return document.querySelector("polygon").attributes[0].value === points;
}
