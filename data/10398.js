{
  return n
    ? t || e
      ? function() {
          var r = "function" == typeof e ? e.call(n) : e,
            o = "function" == typeof t ? t.call(n) : t;
          return r ? N(r, o) : o;
        }
      : void 0
    : e
      ? t
        ? function() {
            return N(
              "function" == typeof e ? e.call(this) : e,
              "function" == typeof t ? t.call(this) : t
            );
          }
        : e
      : t;
}
