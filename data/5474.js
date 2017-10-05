{
  t.same(req.url, "/test");
  t.same(req.headers["x-test"], "blah");
  res.end("test");
}
