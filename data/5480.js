{
  t.same(req.url, "/test");
  t.same(req.method, "DELETE");
  res.end("test");
}
