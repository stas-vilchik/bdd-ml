{
  for (var key in headers) {
    if (headers.hasOwnProperty(key)) {
      expect(request.requestHeaders[key]).toEqual(headers[key]);
    }
  }

  done();
}
