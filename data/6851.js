{
  var rv = distributedNodesTable.get(insertionPoint);
  if (!rv) distributedNodesTable.set(insertionPoint, (rv = []));
  return rv;
}
