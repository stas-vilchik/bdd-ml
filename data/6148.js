{
  const bundlesRowHeader = [chalk.white.bold("Bundles")];

  if (remoteMasterResults) {
    bundlesRowHeader.push(chalk.white.bold("Size"));
  }

  if (localResults) {
    bundlesRowHeader.push(chalk.white.bold("Size"));
  }

  if (localResults && remoteMasterResults) {
    bundlesRowHeader.push(chalk.white.bold("Diff"));
  }

  table.push(bundlesRowHeader);
  const bundles = Object.keys(
    (localResults && localResults.bundles.bundleSizes) ||
      (remoteMasterResults && remoteMasterResults.bundles.bundleSizes)
  );
  bundles.forEach(bundle => {
    const row = [chalk.gray(bundle)];
    let remoteSize = 0;

    if (remoteMasterResults) {
      const remoteBundle = (remoteSize =
        remoteMasterResults.bundles.bundleSizes[bundle]);

      if (remoteBundle) {
        remoteSize = remoteSize.size;
      }

      row.push(chalk.white(remoteSize + " kb"));
    }

    let localSize = 0;

    if (localResults) {
      const localBundle = localResults.bundles.bundleSizes[bundle];

      if (localBundle) {
        localSize = localBundle.size;
      }

      localSize = localResults.bundles.bundleSizes[bundle].size;
      row.push(chalk.white(localSize + " kb"));
    }

    if (localResults && remoteMasterResults) {
      row.push(percentChange(remoteSize, localSize, 0, 0));
    }

    table.push(row);
  });
}
