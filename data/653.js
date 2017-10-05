{
  request.respondWith({
    status: 200,
    responseText: "OK"
  });
  setTimeout(function() {
    expect(response.data).toBe("you have been promised!");
    done();
  }, 100);
}
