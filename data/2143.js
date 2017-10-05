{
  function Test1() {
    _classCallCheck(this, Test1);
  }

  _createClass(Test1, [
    {
      key: "one",
      value: function one() {
        _two.call(_one, 1, 2);
      }
    },
    {
      key: "two",
      value: function two() {
        _two.call(_one, 1, 2);
      }
    }
  ]);

  return Test1;
}
