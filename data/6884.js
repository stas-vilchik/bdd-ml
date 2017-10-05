{
  var points = getDestinationInsertionPoints(node);
  return points && points[points.length - 1] === insertionPoint;
}
