{
  expect(downloadProgressSpy).not.toHaveBeenCalled();
  request.respondWith({
    status: 200,
    responseText: '{"foo": "bar"}'
  });
  expect(downloadProgressSpy).toHaveBeenCalled();
  done();
}
