{
  var this$1 = this;
  var cssFiles = this.clientManifest
    ? this.clientManifest.all.filter(isCSS)
    : [];
  return (
    (cssFiles.length
      ? cssFiles
          .map(function(file) {
            return (
              '<link rel="stylesheet" href="' +
              this$1.publicPath +
              "/" +
              file +
              '">'
            );
          })
          .join("")
      : "") + (context.styles || "")
  );
}
