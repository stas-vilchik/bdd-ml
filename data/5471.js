{
  t.plan(4);
  let server = createServer(async (req, res) => {
    t.same(req.url, '/test');
    t.same(req.headers['content-type'], 'application/json');
    t.same((await body(req)), '{"t":"test"}');
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({
      ok: true
    }));
  });
  await server.listen(1123);
  t.same((await r2.put(url, {
    json: {
      t: 'test'
    }
  }).json), {
    ok: true
  });
  await server.close();
}