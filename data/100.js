{
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
