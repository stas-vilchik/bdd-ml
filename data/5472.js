{
  t.same(req.url, '/test');
  t.same(req.headers['content-type'], 'application/json');
  t.same((await body(req)), '{"t":"test"}');
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify({
    ok: true
  }));
}