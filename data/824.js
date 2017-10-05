{
  var parsed = url.parse(req.url);

  if (parsed.pathname === "/one") {
    res.setHeader("Location", "/two");
    res.statusCode = 302;
    res.end();
  } else {
    res.end(str);
  }
}
