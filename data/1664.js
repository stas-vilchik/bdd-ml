{
  babelHelpers.inherits(Login, _React$Component);

  function Login() {
    babelHelpers.classCallCheck(this, Login);
    return babelHelpers.possibleConstructorReturn(
      this,
      (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments)
    );
  }

  babelHelpers.createClass(Login, [
    {
      key: "getForm",
      value: function getForm() {
        return (0, _store.getForm)().toJS();
      }
    }
  ]);
  return Login;
}
