{
  expect(typeof response.data).toEqual("object");
  expect(response.data.error).toEqual("BAD USERNAME");
  expect(response.data.code).toEqual(1);
  done();
}
