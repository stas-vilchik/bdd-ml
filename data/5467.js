{
  t.plan(2);
  let server = createServer((req, res) => {
    t.same(req.url, '/test');
    res.end('ok');
  });
  await server.listen(1123);
  t.same((await r2(url).text), 'ok');
  await server.close();
}