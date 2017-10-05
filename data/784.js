{
  expect(utils.isString("")).toEqual(true);
  expect(
    utils.isString({
      toString: function() {
        return "";
      }
    })
  ).toEqual(false);
}
