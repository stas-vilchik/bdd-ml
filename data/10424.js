{
  for (var e = 0; e < t.length; e++)
    if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);

  return t;
}
