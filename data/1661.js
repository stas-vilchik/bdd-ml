{
  function Container() {
    babelHelpers.classCallCheck(this, Container);
  }

  babelHelpers.createClass(Container, [
    {
      key: "last",
      value: function last(key) {
        if (!this.has(key)) {
          return;
        }

        return (0, _last2.default)(this.tokens.get(key));
      }
    }
  ]);
  return Container;
}
