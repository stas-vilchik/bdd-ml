{
  return Array.isArray(t)
    ? Ne(t)
    : i(t) ? Fe(t) : "string" == typeof t ? t : "";
}
