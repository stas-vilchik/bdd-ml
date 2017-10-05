{
  if (!skipBuild) {
    await buldAllBundles(reactPath);
  }

  return getBundleResults(reactPath);
}