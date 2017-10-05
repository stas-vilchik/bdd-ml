{
  request.respondWith({
    status: 200
  });
  setTimeout(function() {
    expect(response.config.foo).toEqual(undefined);
    expect(response.config.bar).toEqual(true);
    done();
  }, 100);
}
