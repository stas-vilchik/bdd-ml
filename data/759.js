{
  expect(typeof response.data).toEqual("object");
  expect(response.data.foo).toEqual("bar");
  done();
}
