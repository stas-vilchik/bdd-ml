{
  for (var e = void 0, n = 0, r = t.length; n < r; n++)
    (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && M(e);
}
