{
  if (
    m.chunks.some(function(id) {
      return id === cid;
    })
  ) {
    files.push.apply(files, m.assets.map(fileToIndex));
  }
}
