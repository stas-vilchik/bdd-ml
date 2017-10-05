{
  String.prototype.startsWith.call(
    {
      toString: function() {
        throw RangeError();
      }
    },
    /./
  );
}
