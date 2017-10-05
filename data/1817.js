{
  _export("p", (p = 5));

  _export("p", p);

  for (a in b);

  for (i = 0, j = 0; ; );

  _export(
    "isOdd",
    (isOdd = (function(isEven) {
      return function(n) {
        return !isEven(n);
      };
    })(isEven))
  );

  _export("isOdd", isOdd);
}
