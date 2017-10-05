{
  request.respondWith({
    status: 200,
    responseText: '{"hello":"world"}'
  });
  setTimeout(function() {
    expect(typeof response).toEqual("object");
    expect(response.data.hello).toEqual("world");
    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toEqual("application/json");
    expect(response.config.url).toEqual("/foo");
    done();
  }, 100);
}
