{
  if (cb(e)) {
    return true;
  }

  forRoots(e, cb);
}
