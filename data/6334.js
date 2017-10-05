{
  const key = `${filename} (${bundleType})`;
  Stats.currentBuildResults.bundleSizes[key] = {
    size,
    gzip
  };
}
