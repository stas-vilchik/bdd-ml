{
  server.close();
  server = null;

  if (proxy) {
    proxy.close();
    proxy = null;
  }

  if (process.env.http_proxy) {
    delete process.env.http_proxy;
  }

  callback();
}
