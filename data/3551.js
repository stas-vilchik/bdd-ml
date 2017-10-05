{
  if (error) {
    return reject(error);
  }

  resolve(html);

  if (!isProd) {
    this.log.info(`whole request: ${Date.now() - s}ms`);
  }
}
