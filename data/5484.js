{
  t.same(req.url, '/test');
  t.same((await body(req)), 'test');
  res.end('ok');
}