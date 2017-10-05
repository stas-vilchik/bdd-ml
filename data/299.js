{
  throwIfCancellationRequested(config);
  response.data = transformData(
    response.data,
    response.headers,
    config.transformResponse
  );
  return response;
}
