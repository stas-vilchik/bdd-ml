{
  String.prototype.includes.apply(
    {
      toString: function() {
        throw RangeError();
      }
    },
    [/./]
  );
}
