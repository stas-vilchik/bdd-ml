{
  var this$1 = this;
  var files = this.getPreloadFiles(context);

  if (files.length) {
    return files
      .map(function(ref) {
        var file = ref.file;
        var extension = ref.extension;
        var fileWithoutQuery = ref.fileWithoutQuery;
        var asType = ref.asType;
        var extra = "";
        var shouldPreload = this$1.options.shouldPreload;

        if (!shouldPreload && asType !== "script" && asType !== "style") {
          return "";
        }

        if (shouldPreload && !shouldPreload(fileWithoutQuery, asType)) {
          return "";
        }

        if (asType === "font") {
          extra = ' type="font/' + extension + '" crossorigin';
        }

        return (
          '<link rel="preload" href="' +
          this$1.publicPath +
          "/" +
          file +
          '"' +
          (asType !== "" ? ' as="' + asType + '"' : "") +
          extra +
          ">"
        );
      })
      .join("");
  } else {
    return "";
  }
}
