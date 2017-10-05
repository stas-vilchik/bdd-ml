{
  mkdirp.sync(targetFile.replace(new RegExp("/[^/]*$"), ""));
  fs.writeFileSync(targetFile, body);
  cb();
}
