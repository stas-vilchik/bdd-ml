{
  expect(request.requestHeaders[instance.defaults.xsrfHeaderName]).toEqual(
    "foobarbaz"
  );
  done();
}
