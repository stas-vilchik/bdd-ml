{
  var usedAsyncFiles = this.getUsedAsyncFiles(context);

  if (this.preloadFiles || usedAsyncFiles) {
    return (this.preloadFiles || [])
      .concat(usedAsyncFiles || [])
      .map(function(file) {
        var withoutQuery = file.replace(/\?.*/, "");
        var extension = path.extname(withoutQuery).slice(1);
        return {
          file: file,
          extension: extension,
          fileWithoutQuery: withoutQuery,
          asType: getPreloadType(extension)
        };
      });
  } else {
    return [];
  }
}
