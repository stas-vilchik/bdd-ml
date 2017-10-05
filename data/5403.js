{
  mkdirp.sync(file.replace(new RegExp("/[^/]*$"), ""));
  fs.writeFileSync(file, content);
}
