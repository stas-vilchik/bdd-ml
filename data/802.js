{
  expect(request.requestHeaders[axios.defaults.xsrfHeaderName]).toEqual(
    undefined
  );
  done();
}
