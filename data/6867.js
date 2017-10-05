{
  if (isInsertionPoint(node)) resetDistributedNodes(node);
  else resetDestinationInsertionPoints(node);
  this.resetAllSubtrees(node);
}
