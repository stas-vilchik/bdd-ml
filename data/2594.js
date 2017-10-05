{
  String.prototype.endsWith.call(
    {
      toString: function() {
        throw RangeError();
      }
    },
    /./
  );
}
