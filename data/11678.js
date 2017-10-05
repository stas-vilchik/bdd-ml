{
  var this$1 = this;
  validate(compiler);
  compiler.plugin("emit", function(compilation, cb) {
    var stats = compilation.getStats().toJson();
    var entryName = Object.keys(stats.entrypoints)[0];
    var entryInfo = stats.entrypoints[entryName];

    if (!entryInfo) {
      return cb();
    }

    var entryAssets = entryInfo.assets.filter(isJS);

    if (entryAssets.length > 1) {
      throw new Error(
        "Server-side bundle should have one single entry file. " +
          "Avoid using CommonsChunkPlugin in the server config."
      );
    }

    var entry = entryAssets[0];

    if (!entry || typeof entry !== "string") {
      throw new Error(
        'Entry "' +
          entryName +
          '" not found. Did you specify the correct entry option?'
      );
    }

    var bundle = {
      entry: entry,
      files: {},
      maps: {}
    };
    stats.assets.forEach(function(asset) {
      if (asset.name.match(/\.js$/)) {
        bundle.files[asset.name] = compilation.assets[asset.name].source();
      } else if (asset.name.match(/\.js\.map$/)) {
        bundle.maps[asset.name.replace(/\.map$/, "")] = JSON.parse(
          compilation.assets[asset.name].source()
        );
      }

      delete compilation.assets[asset.name];
    });
    var json = JSON.stringify(bundle, null, 2);
    var filename = this$1.options.filename;
    compilation.assets[filename] = {
      source: function() {
        return json;
      },
      size: function() {
        return json.length;
      }
    };
    cb();
  });
}
