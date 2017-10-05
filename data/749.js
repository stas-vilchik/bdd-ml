{
  request.respondWith({
    status: 200,
    response: str2ab("Hello world")
  });
  setTimeout(function() {
    expect(response.data.byteLength).toBe(22);
    done();
  }, 100);
}
