{
  expect(request.url).toBe("/foo");
  expect(request.method).toBe("GET");
  done();
}
