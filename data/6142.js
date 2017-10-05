{
  if (http2) {
    return createHTTP2Server(benchmark);
  } else {
    return createHTTPServer();
  }
}
