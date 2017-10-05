{
  request.respondWith({
    status: 200,
    responseText: "OK"
  });
  setTimeout(function() {
    expect(response.data).toBe("stuff");
    done();
  }, 100);
}
