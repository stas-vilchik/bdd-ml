{
  String.prototype.includes.apply(
    {
      toString: function() {
        return "abc";
      }
    },
    [/./]
  );
}
