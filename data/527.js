{
  var data = defaults.transformResponse[0]('{"foo":"bar"}');
  expect(typeof data).toEqual("object");
  expect(data.foo).toEqual("bar");
}
