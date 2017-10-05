{
  expect(utils.isURLSearchParams(new URLSearchParams())).toEqual(true);
  expect(utils.isURLSearchParams("foo=1&bar=2")).toEqual(false);
}
