{
  t.plan(3);
  let server = createServer(async (req, res) => {
    t.same(req.url, '/test');
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({
      ok: true
    }));
  });
  await server.listen(1123);
  let r = r2.get(url);
  t.same((await r.json), {
    ok: true
  });
  t.same((await r.text), JSON.stringify({
    ok: true
  }));
  await server.close();
}