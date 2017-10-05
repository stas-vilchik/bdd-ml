{
  const server = http2Server.createServer({}, (request, response) => {
    const filename = join(
      __dirname,
      "benchmarks",
      benchmark,
      request.url
    ).replace(/\?.*/g, "");

    if (existsSync(filename) && statSync(filename).isFile()) {
      sendFile(filename, response);
    } else {
      const indexHtmlPath = join(filename, "index.html");

      if (existsSync(indexHtmlPath)) {
        sendFile(indexHtmlPath, response);
      } else {
        response.writeHead(404);
        response.end();
      }
    }
  });
  server.listen(8080);
  return server;
}
