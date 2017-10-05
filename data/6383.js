{
  if (bundleType !== UMD_DEV && bundleType !== UMD_PROD) {
    fs.unlinkSync(from);
  }
}
