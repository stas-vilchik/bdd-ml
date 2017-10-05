{
  for (; treeScope; treeScope = treeScope.parent) {
    if (treeScope === this) return true;
  }

  return false;
}
