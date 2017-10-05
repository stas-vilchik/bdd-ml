{
  function BaseView() {
    babelHelpers.classCallCheck(this, BaseView);
  }

  babelHelpers.createClass(BaseView, [
    {
      key: "foo",
      value: function foo() {
        this.autoRender = true;
      }
    }
  ]);
  return BaseView;
}
