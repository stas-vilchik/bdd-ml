{
  if (err) throw err;
  stats = stats.toJson();
  if (stats.errors.length) return;
  bundle = JSON.parse(readFile(mfs, "vue-ssr-server-bundle.json"));

  if (clientManifest) {
    ready(bundle, {
      clientManifest
    });
  }
}
