{
  return (
    a(n) && ((r = n), (n = n.handler)),
    "string" == typeof n && (n = t[n]),
    t.$watch(e, n, r)
  );
}
