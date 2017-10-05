{
  t.plan(3);
  let server = createServer(async (req, res) => {
    t.same(req.url, '/test');
    t.same(req.method, 'DELETE');
    res.end('test');
  });
  await server.listen(1123);
  t.same((await r2.delete(url).text), 'test');
  await server.close();
}