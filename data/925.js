{
  file.path = path.resolve(file.base, swapSrcWithLib(file.relative));
  callback(null, file);
}
