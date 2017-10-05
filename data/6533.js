{
  if (!ts.parent) return ts;
  return getTreeScopeRoot(ts.parent);
}
