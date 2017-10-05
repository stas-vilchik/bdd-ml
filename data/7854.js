{
  if (err) return reject(err);

  if (zip) {
    zlib.gzip(code, (err, zipped) => {
      if (err) return reject(err);
      report(" (gzipped: " + getSize(zipped) + ")");
    });
  } else {
    report();
  }
}
