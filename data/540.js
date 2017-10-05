{
  expect(request.requestHeaders["X-CUSTOM-HEADER"]).toBe("foo");
  done();
}
