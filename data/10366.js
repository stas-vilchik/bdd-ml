{
  return null == t
    ? ""
    : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t);
}
