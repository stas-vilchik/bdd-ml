{
  if (m.chunks.length === 1) {
    var cid = m.chunks[0];
    var chunk = stats.chunks.find(function(c) {
      return c.id === cid;
    });

    if (!chunk || !chunk.files) {
      return;
    }

    var files = (manifest.modules[hash(m.identifier)] = chunk.files.map(
      fileToIndex
    ));
    assetModules.forEach(function(m) {
      if (
        m.chunks.some(function(id) {
          return id === cid;
        })
      ) {
        files.push.apply(files, m.assets.map(fileToIndex));
      }
    });
  }
}
