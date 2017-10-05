{
  String.prototype.startsWith.apply(
    {
      toString: function() {
        throw RangeError();
      }
    },
    [/./]
  );
}
