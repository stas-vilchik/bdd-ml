{
  if (!child || getTreeScope(self) !== getTreeScope(child)) return false;

  for (var node = child; node; node = node.parentNode) {
    if (node === self) return true;
  }

  return false;
}
