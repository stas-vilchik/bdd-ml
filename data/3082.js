{
  var s = d3_hierarchy.stratify();
  test.strictEqual(
    s([
      {
        id: {
          toString: function() {
            return "a";
          }
        }
      }
    ]).id,
    "a"
  );
  test.strictEqual(
    s([
      {
        id: ""
      }
    ]).id,
    undefined
  );
  test.strictEqual(
    s([
      {
        id: null
      }
    ]).id,
    undefined
  );
  test.strictEqual(
    s([
      {
        id: undefined
      }
    ]).id,
    undefined
  );
  test.strictEqual(s([{}]).id, undefined);
  test.end();
}
