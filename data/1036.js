{
  function Test() {
    babelHelpers.classCallCheck(this, Test);
  }

  babelHelpers.createClass(Test, [
    {
      key: "bar",
      get: function() {
        throw new Error("wow");
      }
    }
  ]);
  return Test;
}
