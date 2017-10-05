{
  stats = stats.toJson();
  stats.errors.forEach(err => console.error(err));
  stats.warnings.forEach(err => console.warn(err));
  if (stats.errors.length) return;
  clientManifest = JSON.parse(
    readFile(devMiddleware.fileSystem, "vue-ssr-client-manifest.json")
  );

  if (bundle) {
    ready(bundle, {
      clientManifest
    });
  }
}
