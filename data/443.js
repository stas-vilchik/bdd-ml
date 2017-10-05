{
  var request = jasmine.Ajax.requests.mostRecent();
  expect(request.requestHeaders["Authorization"]).toEqual(
    "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="
  );
  done();
}
