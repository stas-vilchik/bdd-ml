{
  getDistributedNodes(insertionPoint).push(child);
  var points = destinationInsertionPointsTable.get(child);
  if (!points) destinationInsertionPointsTable.set(child, [insertionPoint]);
  else points.push(insertionPoint);
}
