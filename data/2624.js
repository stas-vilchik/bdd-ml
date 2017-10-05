{
  String.prototype.includes.call(
    {
      toString: function() {
        return "abc";
      }
    },
    /./
  );
}
