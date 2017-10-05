{
  babelHelpers.inherits(RandomComponent, _Component);

  function RandomComponent() {
    babelHelpers.classCallCheck(this, RandomComponent);
    return babelHelpers.possibleConstructorReturn(
      this,
      (RandomComponent.__proto__ || Object.getPrototypeOf(RandomComponent)
      ).call(this)
    );
  }

  babelHelpers.createClass(RandomComponent, [
    {
      key: "render",
      value: function render() {
        return _react.default.createElement(
          "div",
          {
            className: "sui-RandomComponent"
          },
          _react.default.createElement("h2", null, "Hi there!")
        );
      }
    }
  ]);
  return RandomComponent;
}
