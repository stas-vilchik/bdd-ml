{
  res.setHeader("Location", "/foo");
  res.statusCode = 302;
  res.end();
}
