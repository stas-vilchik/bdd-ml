{
  var this$1 = this;
  compiler.plugin("emit", function(compilation, cb) {
    var stats = compilation.getStats().toJson();
    var allFiles = uniq(
      stats.assets.map(function(a) {
        return a.name;
      })
    );
    var initialFiles = uniq(
      Object.keys(stats.entrypoints)
        .map(function(name) {
          return stats.entrypoints[name].assets;
        })
        .reduce(function(assets, all) {
          return all.concat(assets);
        }, [])
        .filter(isJS)
    );
    var asyncFiles = allFiles.filter(isJS).filter(function(file) {
      return initialFiles.indexOf(file) < 0;
    });
    var manifest = {
      publicPath: stats.publicPath,
      all: allFiles,
      initial: initialFiles,
      async: asyncFiles,
      modules: {}
    };
    var assetModules = stats.modules.filter(function(m) {
      return m.assets.length;
    });

    var fileToIndex = function(file) {
      return manifest.all.indexOf(file);
    };

    stats.modules.forEach(function(m) {
      if (m.chunks.length === 1) {
        var cid = m.chunks[0];
        var chunk = stats.chunks.find(function(c) {
          return c.id === cid;
        });

        if (!chunk || !chunk.files) {
          return;
        }

        var files = (manifest.modules[hash(m.identifier)] = chunk.files.map(
          fileToIndex
        ));
        assetModules.forEach(function(m) {
          if (
            m.chunks.some(function(id) {
              return id === cid;
            })
          ) {
            files.push.apply(files, m.assets.map(fileToIndex));
          }
        });
      }
    });
    var json = JSON.stringify(manifest, null, 2);
    compilation.assets[this$1.options.filename] = {
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
