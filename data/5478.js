{
  t.same(req.url, "/test");
  t.same(req.method, "HEAD");
  res.end("test");
}
