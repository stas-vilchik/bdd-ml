{
  if ("string" == typeof e)
    try {
      e = JSON.parse(e);
    } catch (e) {}
  return e;
}
