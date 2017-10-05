{
  request.respondWith({
    status: 200,
    responseText: "OK"
  });
  expect(request.requestHeaders.test).toBe("added by interceptor");
  done();
}
