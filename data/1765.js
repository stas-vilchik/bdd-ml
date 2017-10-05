{
  return _context.import("./x").then(function(x) {
    x.y();
  });
}
