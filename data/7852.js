{
  function report(extra) {
    console.log(
      blue(path.relative(process.cwd(), dest)) +
        " " +
        getSize(code) +
        (extra || "")
    );
    resolve();
  }

  fs.writeFile(dest, code, err => {
    if (err) return reject(err);

    if (zip) {
      zlib.gzip(code, (err, zipped) => {
        if (err) return reject(err);
        report(" (gzipped: " + getSize(zipped) + ")");
      });
    } else {
      report();
    }
  });
}
