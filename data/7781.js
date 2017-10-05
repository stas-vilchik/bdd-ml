{
  var common = from && to ? getLowestCommonAncestor(from, to) : null;
  var pathFrom = [];

  while (from && from !== common) {
    pathFrom.push(from);
    from = getParent(from);
  }

  var pathTo = [];

  while (to && to !== common) {
    pathTo.push(to);
    to = getParent(to);
  }

  var i;

  for (i = 0; i < pathFrom.length; i++) {
    fn(pathFrom[i], "bubbled", argFrom);
  }

  for (i = pathTo.length; i-- > 0; ) {
    fn(pathTo[i], "captured", argTo);
  }
}
