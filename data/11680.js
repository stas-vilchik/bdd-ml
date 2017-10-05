{
  if (asset.name.match(/\.js$/)) {
    bundle.files[asset.name] = compilation.assets[asset.name].source();
  } else if (asset.name.match(/\.js\.map$/)) {
    bundle.maps[asset.name.replace(/\.map$/, "")] = JSON.parse(
      compilation.assets[asset.name].source()
    );
  }

  delete compilation.assets[asset.name];
}
