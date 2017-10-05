{
  var depthA = 0;

  for (var tempA = instA; tempA; tempA = getParent(tempA)) {
    depthA++;
  }

  var depthB = 0;

  for (var tempB = instB; tempB; tempB = getParent(tempB)) {
    depthB++;
  }

  while (depthA - depthB > 0) {
    instA = getParent(instA);
    depthA--;
  }

  while (depthB - depthA > 0) {
    instB = getParent(instB);
    depthB--;
  }

  var depth = depthA;

  while (depth--) {
    if (instA === instB || instA === instB.alternate) {
      return instA;
    }

    instA = getParent(instA);
    instB = getParent(instB);
  }

  return null;
}
