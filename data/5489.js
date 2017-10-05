{
  t.plan(2);
  let server = createServer(async (req, res) => {
    t.same(req.url, '/test');
    res.end('test');
  });
  await server.listen(1123);
  t.same(Buffer.from((await r2(url).arrayBuffer)), Buffer.from('test'));
  await server.close();
}