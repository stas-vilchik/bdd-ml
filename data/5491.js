{
  t.plan(2);
  let server = createServer(async (req, res) => {
    t.same(req.url, '/test');
    res.end('test');
  });
  await server.listen(1123);
  let blob = await r2(url).blob;
  t.same(blob.size, 4);
  await server.close();
}