{
  source.cancel("Operation has been canceled.");
  request.respondWith({
    status: 200,
    responseText: "OK"
  });
}
