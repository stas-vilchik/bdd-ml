{
  return n
    ? t || e
      ? function() {
          var r = "function" == typeof e ? e.call(n) : e,
            i = "function" == typeof t ? t.call(n) : t;
          return r ? P(r, i) : i;
        }
      : void 0
    : e
      ? t
        ? function() {
            return P(
              "function" == typeof e ? e.call(this) : e,
              "function" == typeof t ? t.call(this) : t
            );
          }
        : e
      : t;
}
