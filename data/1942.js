{
  var id =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : ++Ref.nextID;
  babelHelpers.classCallCheck(this, Ref);
  this.id = id;
}
