{
  this.options = options;
  this.inject = options.inject !== false;
  this.parsedTemplate = options.template
    ? parseTemplate(options.template)
    : null;

  if (options.clientManifest) {
    var clientManifest = (this.clientManifest = options.clientManifest);
    this.publicPath = clientManifest.publicPath.replace(/\/$/, "");
    this.preloadFiles = clientManifest.initial;
    this.prefetchFiles = clientManifest.async;
    this.mapFiles = createMapper(clientManifest);
  }
}
