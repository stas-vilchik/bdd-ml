{
  var files = [];
  var fileIndices = clientManifest.modules[id];

  if (fileIndices) {
    fileIndices.forEach(function(index) {
      var file = clientManifest.all[index];

      if (clientManifest.async.indexOf(file) > -1 || !/\.js($|\?)/.test(file)) {
        files.push(file);
      }
    });
  }

  return files;
}
