{
  expect(request.requestHeaders).toEqual(
    utils.merge(defaults.headers.common, defaults.headers.get, {
      "X-COMMON-HEADER": "commonHeaderValue",
      "X-GET-HEADER": "getHeaderValue",
      "X-FOO-HEADER": "fooHeaderValue",
      "X-BAR-HEADER": "barHeaderValue"
    })
  );
  done();
}
