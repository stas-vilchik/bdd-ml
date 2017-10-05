{
  expect(utils.isDate(new Date())).toEqual(true);
  expect(utils.isDate(Date.now())).toEqual(false);
}
