{
  for (var readableID in nodeConfig) {
    var order = nodeConfig[readableID].order;
    max = order > max ? order : max;
  }
}
