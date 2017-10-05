{
  const table = new Table({
    head: [
      chalk.gray.yellow("Bundle"),
      chalk.gray.yellow("Prev Size"),
      chalk.gray.yellow("Current Size"),
      chalk.gray.yellow("Diff"),
      chalk.gray.yellow("Prev Gzip"),
      chalk.gray.yellow("Current Gzip"),
      chalk.gray.yellow("Diff")
    ]
  });
  Object.keys(currentBuildResults.bundleSizes).forEach(key => {
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
  });
  return table.toString();
}
