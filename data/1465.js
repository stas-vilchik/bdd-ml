{
  babelHelpers.inheritsLoose(BaseController, _Chaplin$Controller);

  function BaseController() {
    return _Chaplin$Controller.apply(this, arguments) || this;
  }

  return BaseController;
}
