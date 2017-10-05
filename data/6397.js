{
  const size = Buffer.byteLength(obj.code);
  const gzipSize = gzip.sync(obj.code);
  options.getSize(size, gzipSize);
}
