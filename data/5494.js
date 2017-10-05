{
  t.same(req.url, "/test");
  res.setHeader("content-type", "application/json");
  res.end(
    JSON.stringify({
      ok: true
    })
  );
}
