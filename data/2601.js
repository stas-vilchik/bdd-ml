{
  String.prototype.endsWith.apply(
    {
      toString: function() {
        throw RangeError();
      }
    },
    [/./]
  );
}
