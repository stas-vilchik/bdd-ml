{
  expect(utils.isFunction(function() {})).toEqual(true);
  expect(utils.isFunction("function")).toEqual(false);
}
