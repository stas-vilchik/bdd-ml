{
  expect(typeof instance.request).toEqual("function");
  expect(typeof instance.get).toEqual("function");
  expect(typeof instance.options).toEqual("function");
  expect(typeof instance.head).toEqual("function");
  expect(typeof instance.delete).toEqual("function");
  expect(typeof instance.post).toEqual("function");
  expect(typeof instance.put).toEqual("function");
  expect(typeof instance.patch).toEqual("function");
}
