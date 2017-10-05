{
  request.respondWith({
    status: 200,
    responseText: '{"foo": "bar"}'
  });
  expect(progressSpy).toHaveBeenCalled();
  done();
}
