{
  const packageDirectory = resolve(`./build/packages/${packageName}`);

  if (fs.existsSync(packageDirectory)) {
    let from = resolve(`./build/${filename}`);
    let to = `${packageDirectory}/${filename}`;

    if (bundleType === UMD_DEV || bundleType === UMD_PROD) {
      const distDirectory = `${packageDirectory}/umd`;

      if (!fs.existsSync(distDirectory)) {
        fs.mkdirSync(distDirectory);
      }

      from = resolve(`./build/dist/${filename}`);
      to = `${packageDirectory}/umd/${filename}`;
    }

    if (bundleType === NODE_DEV || bundleType === NODE_PROD) {
      const distDirectory = `${packageDirectory}/cjs`;

      if (!fs.existsSync(distDirectory)) {
        fs.mkdirSync(distDirectory);
      }

      to = `${packageDirectory}/cjs/${filename}`;
    }

    return asyncCopyTo(from, to).then(() => {
      if (bundleType !== UMD_DEV && bundleType !== UMD_PROD) {
        fs.unlinkSync(from);
      }
    });
  } else {
    return Promise.resolve();
  }
}
