{
  var pool = [];

  for (var child = node.firstChild; child; child = child.nextSibling) {
    if (isInsertionPoint(child)) {
      pool.push.apply(pool, getDistributedNodes(child));
    } else {
      pool.push(child);
    }
  }

  return pool;
}
