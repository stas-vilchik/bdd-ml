{
  reject(
    createError(
      "timeout of " + config.timeout + "ms exceeded",
      config,
      "ECONNABORTED",
      request
    )
  );
  request = null;
}
