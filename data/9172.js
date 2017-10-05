{
  return Array.isArray(t)
    ? Pe(t)
    : o(t) ? Fe(t) : "string" == typeof t ? t : "";
}
