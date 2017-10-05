{
  return Array.isArray(t) ? _(t) : "string" == typeof t ? Do(t) : t;
}
