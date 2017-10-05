{
  return babelHelpers
    .get(Test.__proto__ || Object.getPrototypeOf(Test), "wow", this)
    .call(this);
}
