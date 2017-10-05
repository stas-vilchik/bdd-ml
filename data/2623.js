{
  String.prototype.includes.call(
    {
      toString: function() {
        throw RangeError();
      }
    },
    /./
  );
}
