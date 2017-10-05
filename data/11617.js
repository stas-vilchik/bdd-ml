{
  return (
    usedAsyncFiles &&
    usedAsyncFiles.some(function(f) {
      return f === file;
    })
  );
}
