{
  options = options || {};
  (options.only ? it.only : it)(title, async () => {
    if (options.mockFs) {
      mockFs = options.mockFs;
    }

    const watchConfig = Object.assign({}, defaultConfig, {
      watch: true
    });
    const hm = new HasteMap(watchConfig);
    await hm.build();

    try {
      await fn(hm);
    } finally {
      hm.end();
    }
  });
}
