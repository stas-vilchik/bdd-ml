{
  findAllElements(node, function(e) {
    if (cb(e)) {
      return true;
    }

    forRoots(e, cb);
  });
  forRoots(node, cb);
}
