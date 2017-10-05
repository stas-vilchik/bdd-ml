{
  var ancestorsA = getTreeScopeAncestors(tsA);
  var ancestorsB = getTreeScopeAncestors(tsB);
  var result = null;

  while (ancestorsA.length > 0 && ancestorsB.length > 0) {
    var a = ancestorsA.pop();
    var b = ancestorsB.pop();
    if (a === b) result = a;
    else break;
  }

  return result;
}
