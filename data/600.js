{
  var headers = {
    "content-type": "foo/bar"
  };
  normalizeHeaderName(headers, "Content-Length");
  expect(headers["content-type"]).toBe("foo/bar");
  expect(headers["Content-Length"]).toBeUndefined();
}
