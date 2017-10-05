{
  return N(
    "function" == typeof e ? e.call(this) : e,
    "function" == typeof t ? t.call(this) : t
  );
}
