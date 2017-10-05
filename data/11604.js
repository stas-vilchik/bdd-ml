{
  var file = clientManifest.all[index];

  if (clientManifest.async.indexOf(file) > -1 || !/\.js($|\?)/.test(file)) {
    files.push(file);
  }
}
