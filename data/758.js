{
  request.respondWith({
    status: 200,
    responseText: '{"foo": "bar"}'
  });
  setTimeout(function() {
    expect(typeof response.data).toEqual("object");
    expect(response.data.foo).toEqual("bar");
    done();
  }, 100);
}
