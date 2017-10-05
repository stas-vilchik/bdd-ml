{
  t.plan(3);
  let server = createServer(async (req, res) => {
    t.same(req.url, '/test');
    t.same(req.method, 'PATCH');
    res.end('test');
  });
  await server.listen(1123);
  t.same((await r2.patch(url).text), 'test');
  await server.close();
}