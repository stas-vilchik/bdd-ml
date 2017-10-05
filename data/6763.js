{
  if (typeof before === "object") before = unwrap(before);
  unwrap(this).add(unwrap(element), before);
}
