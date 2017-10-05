{
  expect(utils.isArray([])).toEqual(true);
  expect(
    utils.isArray({
      length: 5
    })
  ).toEqual(false);
}
