{
  a = a[sortKey];
  b = b[sortKey];
  return (a === b ? 0 : a > b ? 1 : -1) * order;
}
