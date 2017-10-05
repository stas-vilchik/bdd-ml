{
  var promise = axios();
  expect(typeof promise.then).toEqual("function");
  expect(typeof promise.catch).toEqual("function");
}
