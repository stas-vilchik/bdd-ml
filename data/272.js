{
  if (!request || (request.readyState !== 4 && !xDomain)) {
    return;
  }

  if (
    request.status === 0 &&
    !(request.responseURL && request.responseURL.indexOf("file:") === 0)
  ) {
    return;
  }

  var responseHeaders =
    "getAllResponseHeaders" in request
      ? parseHeaders(request.getAllResponseHeaders())
      : null;
  var responseData =
    !config.responseType || config.responseType === "text"
      ? request.responseText
      : request.response;
  var response = {
    data: responseData,
    status: request.status === 1223 ? 204 : request.status,
    statusText: request.status === 1223 ? "No Content" : request.statusText,
    headers: responseHeaders,
    config: config,
    request: request
  };
  settle(resolve, reject, response);
  request = null;
}
