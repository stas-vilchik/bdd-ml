{
  t.same(req.url, "/test");
  t.same(req.method, "PATCH");
  res.end("test");
}
