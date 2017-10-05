{
  request.respondWith({
    status: 400,
    statusText: "Bad Request",
    responseText: '{"error": "BAD USERNAME", "code": 1}'
  });
  setTimeout(function() {
    expect(typeof response.data).toEqual("object");
    expect(response.data.error).toEqual("BAD USERNAME");
    expect(response.data.code).toEqual(1);
    done();
  }, 100);
}
