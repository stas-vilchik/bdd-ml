{
  expect(request.requestHeaders["X-Requested-With"]).toEqual("XMLHttpRequest");
  done();
}
