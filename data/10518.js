{
  return Array.isArray(t)
    ? t.indexOf(e) > -1
    : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!s(t) && t.test(e);
}
