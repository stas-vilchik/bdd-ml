{
  mkdirp.sync(targetFile.replace(new RegExp("/[^/]*$"), ""));
  fs.copy(file, targetFile, cb);
}
