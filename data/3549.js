new Promise((resolve, reject) => {
  const cb = (error, html) => {
    if (error) {
      return reject(error);
    }

    resolve(html);

    if (!isProd) {
      this.log.info(`whole request: ${Date.now() - s}ms`);
    }
  };

  if (isProd) {
    renderer.renderToString(context, cb);
  } else {
    readyPromise.then(() => {
      renderer.renderToString(context, cb);
    });
  }
});
