{
  request.respondWith({
    status: 200,
    statusText: "OK",
    responseText: '{"foo": "bar"}',
    headers: {
      "Content-Type": "application/json"
    }
  });
  setTimeout(function() {
    expect(response.data.foo).toEqual("bar");
    expect(response.status).toEqual(200);
    expect(response.statusText).toEqual("OK");
    expect(response.headers["content-type"]).toEqual("application/json");
    done();
  }, 100);
}
