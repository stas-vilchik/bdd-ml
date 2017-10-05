staticCache(resolve(filePath), {
  prefix: pf,
  gzip: true,
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
});
