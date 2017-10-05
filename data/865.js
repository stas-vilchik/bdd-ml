{
  test.equal(req.headers["content-length"], buf.length.toString());
  req.pipe(res);
}
