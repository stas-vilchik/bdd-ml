{
  if (!zs.length) return true;
  if (y > x) return isSorted(zs);
  return false;
}
