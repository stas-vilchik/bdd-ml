{
  let server = http.createServer(handler);
  server._close = server.close;
  server.close = promisify(cb => server._close(cb));
  server._listen = server.listen;
  server.listen = promisify((port, cb) => server._listen(port, cb));
  return server;
}
