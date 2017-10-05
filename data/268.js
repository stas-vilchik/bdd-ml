{
  req.abort();
  reject(
    createError(
      "timeout of " + config.timeout + "ms exceeded",
      config,
      "ECONNABORTED",
      req
    )
  );
}
