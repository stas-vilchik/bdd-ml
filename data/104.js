{
  if (!isCancel(reason)) {
    throwIfCancellationRequested(config);

    if (reason && reason.response) {
      reason.response.data = transformData(
        reason.response.data,
        reason.response.headers,
        config.transformResponse
      );
    }
  }

  return Promise.reject(reason);
}
