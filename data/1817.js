{
  _export("p", (p = 5));

  _export("p", p);

  for (a in b);

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
