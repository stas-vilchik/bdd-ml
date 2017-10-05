{
  var this$1 = this;

  if (this.prefetchFiles) {
    var usedAsyncFiles = this.getUsedAsyncFiles(context);

    var alreadyRendered = function(file) {
      return (
        usedAsyncFiles &&
        usedAsyncFiles.some(function(f) {
          return f === file;
        })
      );
    };

    return this.prefetchFiles
      .map(function(file) {
        if (!alreadyRendered(file)) {
          return (
            '<link rel="prefetch" href="' +
            this$1.publicPath +
            "/" +
            file +
            '">'
          );
        } else {
          return "";
        }
      })
      .join("");
  } else {
    return "";
  }
}
