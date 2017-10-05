{
  t.plan(3);
  let server = createServer(async (req, res) => {
    t.same(req.url, '/test');
    t.same(req.headers['x-test'], 'blah');
    res.end('test');
  });
  await server.listen(1123);
  t.same((await r2.get(url, {
    headers: {
      'x-test': 'blah'
    }
  }).text), 'test');
  await server.close();
}