{
  var files = fs.readdirSync(root);
  var dirs = [];

  for (var i = 0, l = files.length; i < l; i++) {
    var file = files[i];

    if (file[0] !== ".") {
      var stat = fs.statSync(path.join(root, file));

      if (stat.isDirectory()) {
        dirs.push(file);
      }
    }
  }

  return dirs;
}
