{
  var headers = {
    "conTenT-Type": "foo/bar"
  };
  normalizeHeaderName(headers, "Content-Type");
  expect(headers["Content-Type"]).toBe("foo/bar");
  expect(headers["conTenT-Type"]).toBeUndefined();
}
