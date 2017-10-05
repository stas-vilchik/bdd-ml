{
  var this$1 = this;

  if (this.clientManifest) {
    var initial = this.clientManifest.initial;
    var async = this.getUsedAsyncFiles(context);
    var needed = [initial[0]].concat(async || [], initial.slice(1));
    return needed
      .filter(isJS)
      .map(function(file) {
        return (
          '<script src="' + this$1.publicPath + "/" + file + '" defer></script>'
        );
      })
      .join("");
  } else {
    return "";
  }
}
