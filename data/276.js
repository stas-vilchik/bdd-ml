{
  if (!request) {
    return;
  }

  request.abort();
  reject(cancel);
  request = null;
}
