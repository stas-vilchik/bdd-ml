{
  var map = new Map();
  Object.keys(clientManifest.modules).forEach(function(id) {
    map.set(id, mapIdToFile(id, clientManifest));
  });
  return map;
}
