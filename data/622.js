{
  expect(response.config.foo).toEqual(undefined);
  expect(response.config.bar).toEqual(true);
  done();
}
