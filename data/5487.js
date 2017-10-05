{
  t.plan(2);
  let msg = 'Cannot set read-only property.';
  let server = createServer((req, res) => {
    res.end();
  });
  await server.listen(1123);
  let r;

  try {
    r = r2('http://localhost:1123/test');
    r.json = 'asdf';
  } catch (e) {
    t.type(e, 'Error');
    t.same(e.message, msg);
  }

  await r.text;
  await server.close();
}