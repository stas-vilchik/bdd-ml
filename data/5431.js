{
  res.end(
    fs.readFileSync(path.join(FILE_SERVE_ROOT, "jest/blog/feed.xml")) + ""
  );
}
