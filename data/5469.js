{
  t.plan(3);
  let server = createServer(async (req, res) => {
    t.same(req.url, '/test');
    t.same((await body(req)), 'test');
    res.end('ok');
  });
  await server.listen(1123);
  t.same((await r2.put(url, {
    body: 'test'
  }).text), 'ok');
  await server.close();
}