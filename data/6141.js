{
  const server = httpServer.createServer({
    root: join(__dirname, "benchmarks"),
    robots: true,
    cache: "no-store",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true"
    }
  });
  server.listen(8080);
  return server;
}
