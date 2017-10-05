{
  babelHelpers.inherits(SubFoo, _BaseFoo);

  function SubFoo() {
    babelHelpers.classCallCheck(this, SubFoo);
    return babelHelpers.possibleConstructorReturn(
      this,
      (SubFoo.__proto__ || Object.getPrototypeOf(SubFoo)).apply(this, arguments)
    );
  }

  babelHelpers.createClass(SubFoo, null, [
    {
      key: "talk",
      value: function talk() {
        babelHelpers
          .get(SubFoo.__proto__ || Object.getPrototypeOf(SubFoo), "talk", this)
          .call(this);
        console.log("SubFoo.talk");
      }
    }
  ]);
  return SubFoo;
}
