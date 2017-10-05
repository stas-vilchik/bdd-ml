{
  res.setHeader("Location", "/" + i);
  res.statusCode = 302;
  res.end();
  i++;
}
