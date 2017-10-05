{
  const result = currentBuildResults.bundleSizes[key];
  const prev = prevBuildResults.bundleSizes[key];

  if (result === prev) {
    return;
  }

  const size = result.size;
  const gzip = result.gzip;
  let prevSize = prev ? prev.size : 0;
  let prevGzip = prev ? prev.gzip : 0;
  table.push([
    chalk.white.bold(key),
    chalk.gray.bold(filesize(prevSize)),
    chalk.white.bold(filesize(size)),
    percentChange(prevSize, size),
    chalk.gray.bold(filesize(prevGzip)),
    chalk.white.bold(filesize(gzip)),
    percentChange(prevGzip, gzip)
  ]);
}
