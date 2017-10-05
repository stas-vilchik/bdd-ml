{
  return createBundleRenderer(
    bundle,
    Object.assign(options, {
      template,
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      basedir: resolve("../dist"),
      runInNewContext: false
    })
  );
}
