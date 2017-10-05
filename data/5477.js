{
  t.plan(3);
  let server = createServer(async (req, res) => {
    t.same(req.url, '/test');
    t.same(req.method, 'HEAD');
    res.end('test');
  });
  await server.listen(1123);
  t.same((await r2.head(url).text), '');
  await server.close();
}